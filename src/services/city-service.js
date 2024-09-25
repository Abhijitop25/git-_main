const { createCity, deleteCity, updateCity, getCity, createCities, getCities } = require('../repository/city-repository.js');

// Function to create a city
async function createCityService({name}) {
    try {
        const city = await createCity({name});
        return city;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    }
}

async function createCitiesService (cities) {
    try{
        const bulkCities = await createCities(cities);
        return bulkCities;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    } 
}

// Function to delete a city
async function deleteCityService(data) {
    try {
        const res = await deleteCity(data);
        return res;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    }
}

// Function to update a city
async function updateCityService(data) {
    try {
        const city = await updateCity(data);
        return city;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    }
}

// Function to get a city
async function getCityService(data) {
    try {
        const city = await getCity(data);
        return city;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    }
}

async function getCitiesService(){
    try{
        const cities = await getCities();
        return cities;
    }catch(error){
        console.log('Service layer error');
        throw error;
    }
}

// Exporting the functions as part of the module
module.exports = {
    createCityService,
    deleteCityService,
    updateCityService,
    getCityService,
    createCitiesService,
    getCitiesService
};
