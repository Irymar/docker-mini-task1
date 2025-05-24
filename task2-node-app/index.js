const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello from Node in Docker!");
});
server.listen(3000);