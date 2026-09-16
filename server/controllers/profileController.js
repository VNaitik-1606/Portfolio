const Profile = require("../models/Profile");

// GET /api/profile — returns the single profile document
async function getProfile(req, res) {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not set up yet — run the seed script" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
}

// PUT /api/profile — upserts the single profile document
async function updateProfile(req, res) {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: "Failed to update profile", error: err.message });
  }
}

module.exports = { getProfile, updateProfile };
