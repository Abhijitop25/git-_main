const express = require("express");
const { PORT } = require('./config/serverConfig.js')

const startServer = () => {
    const app = express();
    
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    })
}

startServer();