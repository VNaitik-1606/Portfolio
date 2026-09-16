require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/projects");
const skillRoutes = require("./routes/skills");
const certificationRoutes = require("./routes/certifications");
const contactRoutes = require("./routes/contact");
const profileRoutes = require("./routes/profile");

const app = express();

connectDB();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());

// Health check — hit this first in Postman to confirm the server is up
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running" });
});

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/profile", profileRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Central error handler (catches anything thrown synchronously)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
