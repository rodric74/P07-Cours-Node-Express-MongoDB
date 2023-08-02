//importer le package http de node. 
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur mais avec Nodemon !');
});

server.listen(process.env.PORT || 3000); //Par défaut on utilise le port 3000 on utilise process.env.PORT pour utiliser le port envoyé par le serveur sinon on utilise le port 3000. 
