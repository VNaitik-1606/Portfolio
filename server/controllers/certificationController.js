const Certification = require("../models/Certification");

async function getCertifications(req, res) {
  try {
    const certifications = await Certification.find().sort({ order: 1, issueDate: -1 });
    res.json(certifications);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch certifications", error: err.message });
  }
}

async function createCertification(req, res) {
  try {
    const certification = await Certification.create(req.body);
    res.status(201).json(certification);
  } catch (err) {
    res.status(400).json({ message: "Failed to create certification", error: err.message });
  }
}

async function updateCertification(req, res) {
  try {
    const certification = await Certification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!certification) return res.status(404).json({ message: "Certification not found" });
    res.json(certification);
  } catch (err) {
    res.status(400).json({ message: "Failed to update certification", error: err.message });
  }
}

async function deleteCertification(req, res) {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) return res.status(404).json({ message: "Certification not found" });
    res.json({ message: "Certification deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete certification", error: err.message });
  }
}

module.exports = { getCertifications, createCertification, updateCertification, deleteCertification };
