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
   git clone https://github.com/Aastha-Bharti/Auth-Devtown.git
   cd AuthAssignment
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

### Screenshots
<img width="1920" height="1080" alt="Screenshot (184)" src="https://github.com/user-attachments/assets/0b3b9ce1-bbcb-44a8-bc31-7c1da882bf16" />
<img width="1920" height="1080" alt="Screenshot (185)" src="https://github.com/user-attachments/assets/361527ef-6a5a-41fc-8268-60cd6b9f59d4" />
<img width="1920" height="1080" alt="Screenshot (186)" src="https://github.com/user-attachments/assets/099600c2-d474-44f1-88a3-73bb0960541d" />
<img width="1920" height="1080" alt="Screenshot (187)" src="https://github.com/user-attachments/assets/52e60ac2-c542-4b16-85b7-c7aef0404e14" />





