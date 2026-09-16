const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["frontend", "backend", "database", "tools", "language", "other"],
      default: "other",
    },
    level: { type: Number, min: 1, max: 100, default: 50 }, // powers the "XP bar" / bubble size
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
