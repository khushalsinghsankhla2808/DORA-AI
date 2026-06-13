import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./database/db.js";
import authRoute from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;

// ======================================
// FIX Firebase popup COOP warning
// ======================================
app.use((req, res, next) => {
  res.setHeader(
    "Cross-Origin-Opener-Policy",
    "same-origin-allow-popups"
  );
  next();
});

// ======================================
// Middleware
// ======================================
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ======================================
// Routes
// ======================================
app.use("/api/auth", authRoute);

// ======================================
// Start server
// ======================================
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log(error);
  }
};

startServer();