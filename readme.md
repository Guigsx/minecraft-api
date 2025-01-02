# Minecraft API

Este é um projeto de API que fornece informações sobre o status de servidores Minecraft. A API foi construída com Node.js e TypeScript e pode ser facilmente integrada a aplicações web para obter informações em tempo real sobre servidores Minecraft.

![preview](github/preview.png)


## Como Usar

Faça uma requisição `GET` para o seguinte endpoint:

```
https://minecraft-api-0zy9.onrender.com/server/<IP>
```

Exemplo de resposta:
```
{
    "status": {
        "version": {
            "name": "1.7 - 1.21",
            "protocol": 4
        },
        "players": {
            "max": 8000,
            "online": 4547
        },
        "description": "..."
        "favicon": "..."
    }
}
```