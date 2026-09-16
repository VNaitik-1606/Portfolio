const Skill = require("../models/Skill");

async function getSkills(req, res) {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch skills", error: err.message });
  }
}

async function createSkill(req, res) {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ message: "Failed to create skill", error: err.message });
  }
}

async function updateSkill(req, res) {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json(skill);
  } catch (err) {
    res.status(400).json({ message: "Failed to update skill", error: err.message });
  }
}

async function deleteSkill(req, res) {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete skill", error: err.message });
  }
}

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
