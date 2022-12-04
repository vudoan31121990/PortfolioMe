require("dotenv").config({
    path: process.cwd() + './.env'
})

const http = require('http');
const app = require('./app');

const onListenning = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
}

const normalizePort = (val) => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);
server.on("listening", onListenning);
server.listen(port);

console.log("Server started at: " +Date() + " into the PORT: " +port);