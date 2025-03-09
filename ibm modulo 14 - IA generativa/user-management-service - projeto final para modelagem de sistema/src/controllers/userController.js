const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: "Usuário já existe" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: "Usuário registrado com sucesso", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário", error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Senha incorreta" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login realizado com sucesso", token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login", error });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const { newUsername } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { username },
      { username: newUsername },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "Usuário não encontrado" });

    res.status(200).json({ message: "Usuário atualizado com sucesso", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
};
