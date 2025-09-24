// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

// MongoDB connection string
const uri = "mongodb+srv://username:password";

const client = new MongoClient(uri);
let db;

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
client.connect()
  .then(() => {
    db = client.db("bookstore"); // database name
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("DB connection error:", err));

// Routes

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Create new order
app.post("/orders", async (req, res) => {
  try {
    const order = req.body; // Expecting { name, email, address, items, totalAmount }
    const result = await db.collection("orders").insertOne(order);
    res.status(201).send({ message: "Order placed successfully", orderId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to place order" });
  }
});

// Fetch all orders (optional, for testing)
app.get("/orders", async (req, res) => {
  try {
    const orders = await db.collection("orders").find({}).toArray();
    res.send(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to fetch orders" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


