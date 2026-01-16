import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ 1. Improved CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://mintpixel-zful.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl/Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// ✅ 2. Middleware - APPLY ONCE
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

// 🏠 Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running ✅" });
});

// 📨 Email submission endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, service, timeline, budget, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use Google App Password here
      },
    });

    let emailText = `New Project Inquiry\n==================\n\n`;
    emailText += `Name: ${name}\nEmail: ${email}\nService: ${service}\n`;
    if (timeline) emailText += `Timeline: ${timeline}\n`;
    if (budget) emailText += `Budget: ${budget}\n`;
    emailText += `\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `"NewProposal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `NewProposal: ${service} - ${name}`,
      text: emailText,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// ❌ Handle 404 - Keep this at the end of routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT}`);
});

// 🛑 REMOVE THE BACKEND_URL SECTION FROM THIS FILE
// That code belongs in your React (Frontend) files, not the Express (Backend) file.
