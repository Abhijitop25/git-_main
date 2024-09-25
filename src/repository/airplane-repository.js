const { Airplane } = require('../models/index.js');


async function getAirplane(id) {
    try {
        const airplane = await Airplane.findByPk(id);
        return airplane;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

module.exports = {
    getAirplane
}