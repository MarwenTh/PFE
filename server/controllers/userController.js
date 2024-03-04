const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// GET /api/users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/users
const createUser = async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_role } = req.body;
    const user = await userModel.findOne({ user_email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user_password, salt);
      const newUser = new userModel({
        user_name,
        user_email,
        user_password: hashedPassword,
        user_role,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign(
        { _id: savedUser._id, user_role: savedUser.user_role },
        process.env.JWT_SECRET
      );
      res.json({
        token,
        user: {
          _id: savedUser._id,
          user_name: savedUser.user_name,
          user_email: savedUser.user_email,
          user_role: savedUser.user_role,
        },
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST /api/users/login
const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const user = await userModel.findOne({ user_email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const validPassword = bcrypt.compare(user_password, user.user_password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { _id: user._id, user_role: user.user_role },
      process.env.JWT_SECRET
    );
    res.json({
      token,
      user: {
        _id: user._id,
        user_name: user.user_name,
        user_email: user.user_email,
        user_role: user.user_role,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_role } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);
    const user = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        user_name,
        user_email,
        user_password: hashedPassword,
        user_role,
        user_updated: Date.now(),
      },
      { new: true }
    );
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Unable to delete user. User not found" });
    }
    res.json({ message: "User deleted successfully " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
