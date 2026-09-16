const Project = require("../models/Project");

// GET /api/projects
async function getProjects(req, res) {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects", error: err.message });
  }
}

// GET /api/projects/:id
async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch project", error: err.message });
  }
}

// POST /api/projects
async function createProject(req, res) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: "Failed to create project", error: err.message });
  }
}

// PUT /api/projects/:id
async function updateProject(req, res) {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: "Failed to update project", error: err.message });
  }
}

// DELETE /api/projects/:id
async function deleteProject(req, res) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete project", error: err.message });
  }
}

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };
