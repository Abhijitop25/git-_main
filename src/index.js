const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');

const {Airport, City} = require('./models/index.js')
const db = require('./models/index.js')
const { PORT } = require('./config/serverConfig.js')
const sequelize = require('sequelize');
const ApiRoutes = require('./routes/index.js')

const startServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`server running on port ${PORT}`);
        
    })
}

startServer();