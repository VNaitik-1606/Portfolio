const Message = require("../models/Message");

// POST /api/contact — public, used by the contact form
async function sendMessage(req, res) {
  try {
    const { name, email, subject, body } = req.body;

    if (!name || !email || !body) {
      return res.status(400).json({ message: "Name, email, and message body are required" });
    }

    const message = await Message.create({ name, email, subject, body });
    res.status(201).json({ message: "Message sent", data: message });
  } catch (err) {
    res.status(400).json({ message: "Failed to send message", error: err.message });
  }
}

// GET /api/contact — for you to read incoming messages (no auth yet — see README)
async function getMessages(req, res) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages", error: err.message });
  }
}

async function markAsRead(req, res) {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json(message);
  } catch (err) {
    res.status(400).json({ message: "Failed to update message", error: err.message });
  }
}

module.exports = { sendMessage, getMessages, markAsRead };
