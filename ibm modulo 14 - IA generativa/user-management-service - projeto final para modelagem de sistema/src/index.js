require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("Erro: MONGO_URI não definido no arquivo .env");
    process.exit(1);
}

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Conectado ao MongoDB");
}).catch(err => {
    console.error("❌ Erro ao conectar ao MongoDB:", err);
    process.exit(1);
});

app.get("/", (req, res) => {
    res.send("Servidor está rodando!");
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
