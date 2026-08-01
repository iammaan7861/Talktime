# 💬 TalkTime — Full-Stack Social Network & Real-Time Messaging Platform

TalkTime is a modern, full-stack social networking and real-time messaging web application. Inspired by platforms like Threads, Twitter, and Instagram Direct, TalkTime combines social feed interactions (posting, liking, commenting, following) with real-time 1-on-1 direct messaging powered by WebSockets.

---

## 🌟 Key Features

### 📱 **Social Feed & Community**
- **Feed & Posts**: Create text and image posts, view updates from users you follow.
- **Interactions**: Like/unlike posts, reply to posts with nested comments.
- **User Profiles**: Customized user profile pages showing user bios, followers/following counts, and post history.
- **Follow System**: Follow and unfollow users with real-time state updates.
- **Suggested Users**: Discover new users to connect with.

### ⚡ **Real-Time Direct Messaging**
- **Live 1-on-1 Chat**: Instant messaging powered by **Socket.io**.
- **Active / Online Status**: Live online user indicators in real time.
- **Image Attachments**: Send media in direct messages.
- **Read Receipts**: Track message read/seen status.

### 🔐 **Security & Design**
- **Authentication**: JWT-based session security via HTTP-only cookies & `bcryptjs` password hashing.
- **Flexible Login**: Support for logging in via **Username** or **Email address**.
- **Theme Support**: Seamless Dark Mode and Light Mode switching via Chakra UI.
- **Media Uploads**: Cloud-hosted images integrated via **Cloudinary API**.
- **Persistent Database**: Built-in MongoDB / MongoMemoryServer fallback for seamless setup.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI Library**: [Chakra UI](https://chakra-ui.com/)
- **State Management**: [Recoil](https://recoiljs.org/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Icons**: React Icons & Chakra Icons
- **Real-Time WebSockets**: Socket.io-client

### **Backend**
- **Runtime**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose ODM](https://mongoosejs.com/)
- **Real-Time WebSockets**: [Socket.io](https://socket.io/)
- **Authentication**: JSON Web Tokens (JWT) + `cookie-parser` + `bcryptjs`
- **Cloud Storage**: [Cloudinary](https://cloudinary.com/)

---

## 📁 Project Structure

```text
TalkTime/
├── client/                     # Frontend Application (React + Vite)
│   ├── src/
│   │   ├── atoms/              # Recoil global state stores
│   │   ├── components/         # Reusable UI components (Post, Comment, Header, Chat)
│   │   ├── context/            # SocketContext provider
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # App pages (HomePage, AuthPage, ChatPage, UserPage)
│   │   ├── App.jsx             # Main layout & router setup
│   │   └── main.jsx            # React root entry point
│   ├── package.json            # Client dependencies & Vite scripts
│   └── vite.config.js          # Vite configuration & dev proxy
│
└── server/                     # Backend API & WebSocket Server
    ├── controllers/            # User, Post, and Message controllers
    ├── database/               # Mongoose & In-Memory MongoDB connection logic
    ├── middleware/             # protectRoute JWT middleware
    ├── models/                 # Mongoose schemas (User, Post, Conversation, Message)
    ├── routes/                 # Express API routes
    ├── socket/                 # Socket.io connection & online user mapping
    ├── utils/                  # Helper utilities (JWT generator)
    └── server.js               # Express server entry point
```

---

## 🚀 Getting Started Locally

### 1. **Prerequisites**
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### 2. **Clone the Repository**
```bash
git clone https://github.com/iammaan7861/Talktime.git
cd Talktime
```

### 3. **Environment Setup**
Create a `.env` file in the root directory (or inside `server/`):

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/talktime
JWT_SECRET=your_jwt_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

*(Note: If local MongoDB is not running, the application automatically uses built-in persistent storage fallback).*

### 4. **Install Dependencies**
```bash
# Install server & client dependencies
npm run install-all
```

### 5. **Run the Application**

#### Run Frontend & Backend concurrently in development:

- **Start Frontend**:
  ```bash
  npm run dev --prefix client
  ```
  *(Opens at `http://localhost:3000`)*

- **Start Backend**:
  ```bash
  node server/server.js
  ```
  *(Runs on `http://localhost:5000`)*

---

## 🌐 Production Deployment

TalkTime is configured for easy deployment on **Render**, **Railway**, or **Vercel**:

1. **Build script**: `npm run build`
2. **Start script**: `npm run start`

---

## 📄 License

This project is licensed under the ISC License.