const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
dotenv.config();

const connectDB = async () => {
    try {
        let mongoURL = process.env.MONGO_URL;
        
        // Attempt connecting to specified MONGO_URL if customized
        if (mongoURL && !mongoURL.includes("localhost:27017")) {
            await mongoose.connect(mongoURL);
            console.log("Successfully Connected to MongoDB database");
            return;
        }

        // Try local MongoDB first, fallback to Persistent MongoMemoryServer if refused
        try {
            await mongoose.connect(mongoURL || "mongodb://127.0.0.1:27017/talktime", { serverSelectionTimeoutMS: 2000 });
            console.log("Successfully Connected to local MongoDB");
        } catch (localErr) {
            console.log("Local MongoDB not detected. Starting Persistent In-Memory MongoDB Server...");
            const { MongoMemoryServer } = require("mongodb-memory-server");
            
            const dbDir = path.join(__dirname, "../data/db");
            if (!fs.existsSync(dbDir)) {
                fs.mkdirSync(dbDir, { recursive: true });
            }

            const mongoServer = await MongoMemoryServer.create({
                instance: {
                    dbPath: dbDir,
                }
            });
            const memoryUri = mongoServer.getUri();
            await mongoose.connect(memoryUri);
            console.log("Successfully Connected to Persistent In-Memory MongoDB:", memoryUri);
        }
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

connectDB();
