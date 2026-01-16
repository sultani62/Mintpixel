import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Dynamic CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://mintpixel-zful.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Apply CORS middleware
app.use(cors(corsOptions));

// ✅ Handle preflight requests explicitly
app.options("*", cors(corsOptions));

// ✅ Middleware
app.use(express.json({ limit: "10mb" }));

// 🏠 Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend is running ✅",
    cors: allowedOrigins,
    timestamp: new Date().toISOString(),
  });
});

// 📨 Email submission endpoint
app.post("/send-email", async (req, res) => {
  // IMPORTANT: Set CORS headers manually to be safe
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  const { name, email, service, timeline, budget, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({
      message:
        "Missing required fields: name, email, service, and message are required.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let emailText = `New Project Inquiry\n`;
    emailText += `==================\n\n`;
    emailText += `Name: ${name}\n`;
    emailText += `Email: ${email}\n`;
    emailText += `Service: ${service}\n`;
    if (timeline) emailText += `Timeline: ${timeline}\n`;
    if (budget) emailText += `Budget: ${budget}\n`;
    emailText += `\nMessage:\n${message}\n\n`;
    emailText += `Submitted: ${new Date().toLocaleString()}`;

    await transporter.sendMail({
      from: `"NewProposal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `NewProposal: ${service} - ${name}`,
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

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT}`);
  console.log(`🟢 Allowed origins: ${allowedOrigins.join(", ")}`);
});
