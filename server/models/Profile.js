const mongoose = require("mongoose");

// This collection is meant to hold exactly one document — the site owner's
// hero intro + academic details, so those sections can be edited without
// touching frontend code.
const academicEntrySchema = new mongoose.Schema(
  {
    institution: { type: String, required: true, trim: true },
    degree: { type: String, trim: true },
    detail: { type: String, trim: true }, // e.g. "CGPA 7.97"
    startYear: { type: Number },
    endYear: { type: Number },
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    tagline: { type: String, trim: true }, // short heading under the name
    intro: { type: String, required: true }, // hero paragraph
    avatarUrl: { type: String, trim: true },
    resumeUrl: { type: String, trim: true }, // powers "Download CV"
    githubUrl: { type: String, trim: true },
    githubQrUrl: { type: String, trim: true },
    academics: [academicEntrySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
