const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    techStack: [{ type: String, trim: true }],
    githubUrl: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
    imageUrl: { type: String, trim: true }, // cartridge art for this project
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 }, // controls display order
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
