const { getAll } = require('../controllers/flight-controller.js');
const { City } = require('../models/index.js');

// Function to create a city
async function createCity({ name }) {
    try {
        const city = await City.create({name});
        return city;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

async function createCities (cities){
    try{
        const result = await City.bulkCreate(cities, {
            validate: true, // Ensures validation is run on each record
            // individualHooks: true, // Runs hooks for each instance (if needed)
        });
        return result;
    } catch(error){
        console.log("Repository layer Error");
        throw error;
    }
}

// Function to delete a city
async function deleteCity({ cityId }) {
    try {
        await City.destroy({
            where: {
                id: cityId
            }
        });
        return true;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

// Function to update a city
async function updateCity({ cityId, data }) {
    try {
        const city = await City.update(data, {
            where: {
                id: cityId
            }
        });
        return city;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

// Function to get a city by its ID
async function getCity(cityId) {
    try {
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

async function getCities() {
    try{
        const cities = await City.findAll();
        return cities;
    }catch(error){
        console.log('Repository layer error');
        throw error;
    }
}

// Exporting the functions as part of the module
module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity,
    createCities,
    getCities
};
