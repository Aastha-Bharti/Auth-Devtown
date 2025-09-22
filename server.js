import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(bodyParser.json());

const PORT = 5000;
const SECRET_KEY = "MY_SECRET_KEY"; 

const users = [];

/* TASK 1: Password Hashing */

// Register Route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });
  res.json({ message: "User registered successfully" });
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordSame = await bcrypt.compare(password, user.password);

  if (!isPasswordSame) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // TASK 2: JWT on successful login
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

// Protected Profile Route
app.get("/profile", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1]; 
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: `Welcome ${decoded.username}` });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Root Route (Fixes your 404 when visiting /)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
