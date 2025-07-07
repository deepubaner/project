const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const user = await User.create({ name, email, password });
    console.log("✅ Saved user:", user);
    res.status(201).json({ message: "Registered successfully", id: user._id });
  } catch (err) {
    console.error("❌ Register error:", err);
    res.status(500).json({ message: "Register error", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login success", id: user._id, name: user.name });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};
