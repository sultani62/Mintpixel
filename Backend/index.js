// index.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://mintpixel-zful.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware - IMPORTANT ORDER
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

// Handle preflight requests
app.options("*", cors(corsOptions));

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend is running ✅",
    timestamp: new Date().toISOString(),
  });
});

// Test route - Add this for debugging
app.get("/send-email", (req, res) => {
  res.status(200).json({
    message: "This endpoint requires POST method",
    instructions: "Send POST request with form data",
  });
});

// Email submission endpoint
app.post("/send-email", async (req, res) => {
  console.log("📨 Received email request");

  const { name, email, service, timeline, budget, message } = req.body;

  // Log the received data for debugging
  console.log("Form data:", { name, email, service, timeline, budget });

  // Validation
  if (!name || !email || !service || !message) {
    console.log("❌ Validation failed");
    return res.status(400).json({
      success: false,
      message:
        "Missing required fields: name, email, service, and message are required.",
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("❌ Invalid email");
    return res.status(400).json({
      success: false,
      message: "Invalid email address.",
    });
  }

  try {
    // Check if email credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Email credentials not configured");
      return res.status(500).json({
        success: false,
        message: "Server configuration error. Please contact administrator.",
      });
    }

    console.log("📧 Configuring nodemailer...");

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Build email body
    let emailText = `New Project Inquiry\n`;
    emailText += `==================\n\n`;
    emailText += `Name: ${name}\n`;
    emailText += `Email: ${email}\n`;
    emailText += `Service: ${service}\n`;
    if (timeline) emailText += `Timeline: ${timeline}\n`;
    if (budget) emailText += `Budget: ${budget}\n`;
    emailText += `\nMessage:\n${message}\n\n`;
    emailText += `Submitted: ${new Date().toLocaleString()}`;

    console.log("📤 Sending email...");

    // Send email
    await transporter.sendMail({
      from: `"MintPixel Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Project: ${service} - ${name}`,
      text: emailText,
    });

    console.log("✅ Email sent successfully!");

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
      error: error.message,
    });
  }
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
    method: req.method,
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🟢 Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: POST http://localhost:${PORT}/send-email`);
  console.log(`✅ Allowed origins: ${allowedOrigins.join(", ")}`);
});
