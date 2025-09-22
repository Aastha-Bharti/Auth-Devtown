# Password Hashing & JWT Authentication

This is a simple **Node.js + Express** project demonstrating **password hashing** and **JWT-based authentication**.  
It is an assignment built as part of a **DevTown bootcamp**.

---

## Features

1. **User Registration**  
   - Stores users in-memory (no database)  
   - Passwords are securely hashed using **bcrypt**

2. **User Login**  
   - Validates user credentials  
   - Generates a **JWT token** on successful login

3. **Protected Profile Route**  
   - Accessible only with a valid JWT token  
   - Demonstrates role-based access control

---

## Tech Stack

- Node.js
- Express.js
- bcrypt
- jsonwebtoken
- body-parser

---

## Getting Started

### Prerequisites

- Node.js installed
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. Install dependencies
   ```npm install```
3. Start the server
   ```node server.js```

Server will run on http://localhost:5000

### API Endpoints

1. Register User
POST /register

2. Login User
POST /login

3. Profile (Protected)
GET /profile
Headers: { "Authorization": "Bearer <JWT token>" }

### Notes

This project does not use a database; all users are stored in memory for demonstration purposes.
Tokens expire in 1 hour.

