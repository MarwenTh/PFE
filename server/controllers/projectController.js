const projectModel = require("../models/projectModel");

// GET /api/projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/projects/:id
const getProjectById = async (req, res) => {
  try {
    const project = await projectModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/projects
const createProject = async (req, res) => {
  const project = new projectModel({
    ...req.body,
  });
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/projects/:id
const updateProject = async (req, res) => {
  try {
    const project = await projectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) {
      return res
        .status(404)
        .json({ message: "Unable to update project. Project not found." });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/projects/:id
const deleteProject = async (req, res) => {
  try {
    const project = await projectModel.findByIdAndDelete(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ message: "Unable to delete project. Project not found" });
    }
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
