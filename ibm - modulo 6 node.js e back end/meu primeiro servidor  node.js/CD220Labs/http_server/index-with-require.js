const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
    res.writeHead(200);

    // Pegar o valor da data uma única vez
    const valordata = today.getDate();
    const hora = valordata.getHours(); // Usar getHours() para obter a hora

    let def = "não está de manhã";

    // Corrigindo a lógica das horas
    if (hora.getHours() >= 6 && hora.getHours < 12) {
        def = "bon giorno!";
    } else if (hora.getHours >= 12 && hora.getHours() < 18) {
        def = "Boa tarde!";
    } else if (hora.getHours() >= 18 && hora.getHours() < 21) {
        def = "Boa noite!";
    } else {
        def = "Boa madrugada!";
    }

    // Enviar apenas uma resposta
    res.end(`Hello, ${def} - Agora são ${hora} horas`);
};

const port = 8080;
const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});