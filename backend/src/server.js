require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(
    cors({
      origin: [process.env.FRONTEND_URL || "http://localhost:5173",
        "https://ride-fare-comparison-six.vercel.app" ],
      credentials: true,
    })
);

app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("🚖 Ride Fare Comparison API is Running!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "Backend running",
    timestamp: new Date(),
  });
});

// Routes
app.use("/api/search", require("./routes/search"));
app.use("/api/fares", require("./routes/fares"));

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    error: err.message,
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});