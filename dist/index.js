"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const minecraft_status_1 = require("minecraft-status");
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo á minha API' });
});
app.get('/server/:ip', (req, res) => {
    const serverIP = req.params.ip;
    if (!serverIP) {
        // 400 erro do usuário, 500 do sistema.
        return res.status(400).json({ error: 'É necessário fornecer o IP do servidor.' });
    }
    minecraft_status_1.MinecraftServerListPing.ping(4, serverIP, 25565, 3000)
        .then((response) => {
        res.json({ status: response });
    })
        .catch((error) => {
        console.log('Houve um erro ao fazer a requisição do servidor: ' + serverIP);
        res.status(500).json({ error: 'Erro ao obter status do servidor. Verifique o IP fornecido e tente novamente.' });
    });
});
app.listen(port, () => {
    console.log(`API rodando.`);
});
