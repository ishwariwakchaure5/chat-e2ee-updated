# 🔐 Chat E2EE – End-to-End Encrypted Disposable Chat

A privacy-focused end-to-end encrypted 1:1 chat application built using **Node.js, TypeScript, Socket.IO, MongoDB, WebRTC, and the Web Crypto API**.

This system enables two users to communicate securely in a temporary chat session where:

- Messages are encrypted on the client side
- The server never decrypts user messages
- No chat history is permanently stored
- Private keys never leave the user's device
- Sessions expire automatically

This project also includes a reusable SDK (`@chat-e2ee/service`) for building custom encrypted chat clients.

---

# 🚀 Project Overview

Traditional chat systems store messages on servers, making them vulnerable to breaches or misuse.

This project implements a **disposable encrypted communication system** where:

- The backend acts only as a relay
- Encryption happens entirely in the browser
- Each session has a unique ID and PIN
- Channels automatically expire after 30 minutes

This ensures:

- Privacy-first architecture
- Zero plaintext exposure on the server
- Secure key exchange
- Temporary communication sessions

---

# 🏗 System Architecture

```
User A (Browser)
   ↓ (Generate key pair)
Public Key
   ↓
Backend (Stores public key & channel info)
   ↓
User B (Browser)
   ↓
Encrypted Messages via Socket.IO
   ↓
Decryption using private key (Client-side)
```

---

# 🔐 Encryption Model

## Key Generation

- Each user generates a public/private key pair locally using:
  ```
  window.crypto.subtle
  ```

- Private key:
  - Never sent to server
  - Never stored remotely

- Public key:
  - Shared through backend for secure key exchange

---

## Secure Message Flow

1. User A generates a unique chat link
2. Channel is created in MongoDB
3. User B joins using PIN
4. Public keys are exchanged
5. AES session key is securely shared
6. Messages are encrypted in browser
7. Encrypted payload sent via Socket.IO
8. Receiver decrypts locally

The server only relays encrypted data and cannot decrypt messages.

---

# 📞 Encrypted Audio Call (WebRTC)

The application supports experimental 1:1 audio calling using WebRTC.

- Peer-to-peer connection
- Session description exchanged via backend
- Media stream not processed by server
- Audio encryption handled by WebRTC layer
- Uses RTCRtpSender API (`createEncodedStreams`)

Note: WebRTC encryption works differently from text encryption and depends on browser support.

---

# 🧩 Backend Architecture

Backend is built with:

- Node.js
- Express
- Socket.IO
- MongoDB
- UUID for channel generation

## Responsibilities

- Create chat channels
- Store public keys
- Store encrypted AES keys
- Validate PIN
- Relay encrypted messages
- Expire channels after 30 minutes

The backend never:

- Decrypts messages
- Stores plaintext
- Stores private keys

---

# 📦 SDK – @chat-e2ee/service

This project includes a reusable SDK located in:

```
./service
```

The SDK allows developers to:

- Build custom chat clients
- Connect to chat backend
- Manage encryption logic
- Handle WebRTC calls
- Use Socket.IO abstraction layer

This enables frontend flexibility while maintaining encryption guarantees.

---

# 📁 Folder Structure

```
chat-e2ee-updated/
│
├── backend/        → Express controllers & routes
├── client/         → React frontend
├── service/        → SDK for encrypted chat
├── app.ts          → Express configuration
├── index.ts        → Server entry point
├── package.json
└── README.md
```

---

# 🛠 Installation

## Requirements

- Node.js 16+
- MongoDB
- npm

---

## 1️⃣ Clone Repository

```
git clone https://github.com/your-username/chat-e2ee-updated.git
cd chat-e2ee-updated
```

---

## 2️⃣ Install Dependencies

```
npm install
```

---

## 3️⃣ Configure Environment

Create `.env` file based on `.env.sample`:

```
MONGO_URI=your_mongodb_connection
PORT=3001
```

---

## 4️⃣ Run Development Mode

```
npm run dev
```

This will:

- Start backend on port 3001
- Start React frontend on port 3000
- Enable nodemon for backend watch mode

---

# 🔄 How to Use

1. Generate a unique chat link
2. Share the link and PIN
3. Start chatting securely
4. Close session → Data is not recoverable
5. Channel auto-expires after 30 minutes

---

# 🔒 Security Features

- Client-side encryption
- Private keys never leave device
- AES session key per channel
- PIN-protected channels
- Temporary sessions
- No permanent message storage
- Server acts only as relay

---

# ⚠️ Limitations

- 1:1 chat only
- Audio call browser support varies
- No message recovery
- Encrypted data may remain in memory traces
- Not intended as replacement for production chat apps

---

# 🧪 Testing

Run:

```
npm test
```

Testing is configured using Jest.

---

# 🐳 Docker Support

This project supports containerized deployment.

Refer to Docker documentation in the repository for setup instructions.

---

# 💼 Technical Stack

Frontend:
- React
- TypeScript
- Web Crypto API
- WebRTC

Backend:
- Node.js
- Express
- Socket.IO
- MongoDB

SDK:
- TypeScript
- WebSocket abstraction
- Encryption helpers

---

# 🎓 Learning Outcomes

This project demonstrates knowledge of:

- End-to-end encryption principles
- Public/private key exchange
- AES symmetric encryption
- WebRTC signaling
- Real-time communication systems
- Backend relay architecture
- Secure disposable session design

---

# 👩‍💻 Author

Ishwari Wakchaure 
GitHub: https://github.com/ishwariwakchaure5


