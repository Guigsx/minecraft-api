import express from 'express';
import { MinecraftServerListPing } from 'minecraft-status';

const app = express();
const port = 5000;

app.get('/', (req: any, res: any) => {
    res.json({ message: 'Bem-vindo á minha API' })
})

app.get('/server/:ip', (req: any, res: any) => {
    const serverIP = req.params.ip
    if (!serverIP) {

        // 400 erro do usuário, 500 do sistema.
        return res.status(400).json({ error: 'É necessário fornecer o IP do servidor.' })
    }

    MinecraftServerListPing.ping(4, serverIP, 25565, 3000)
        .then((response: any) => {

            res.json({ status: response })

        })
        .catch((error: any) => {
            console.log('Houve um erro ao fazer a requisição do servidor: ' + serverIP);
            res.status(500).json({ error: 'Erro ao obter status do servidor. Verifique o IP fornecido e tente novamente.' })
        })

});

app.listen(port, () => {
    console.log(`API rodando.`);
});