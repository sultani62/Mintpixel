// index.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration – Allow only your frontend origin
const corsOptions = {
  origin: "http://localhost:5173", // Vite dev server
  optionsSuccessStatus: 200,
};

// ✅ Middleware – ORDER MATTERS!
app.use(cors(corsOptions)); // Must come first
app.use(express.json({ limit: "10mb" })); // Parse JSON bodies

// 🏠 Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running ✅" });
});

// 📨 Email submission endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, service, timeline, budget, message } = req.body;

  // 🔒 Validation
  if (!name || !email || !service || !message) {
    return res.status(400).json({
      message:
        "Missing required fields: name, email, service, and message are required.",
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    // 🛠️ Configure Nodemailer (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📄 Build clean email body
    let emailText = `New Project Inquiry\n`;
    emailText += `==================\n\n`;
    emailText += `Name: ${name}\n`;
    emailText += `Email: ${email}\n`;
    emailText += `Service: ${service}\n`;
    if (timeline) emailText += `Timeline: ${timeline}\n`;
    if (budget) emailText += `Budget: ${budget}\n`;
    emailText += `\nMessage:\n${message}\n\n`;
    emailText += `Submitted: ${new Date().toLocaleString()}`;

    // 📤 Send email
    await transporter.sendMail({
      from: `"NewProposal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `NewProposal: ${service} - ${name}`,
      text: emailText,
    });

    console.log("✅ Email sent successfully!");
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    return res.status(500).json({
      message: "Failed to send email. Please try again later.",
    });
  }
});

// ❌ Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});
