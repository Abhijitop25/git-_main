const { Flights } = require('../models/index.js');
const { Op } = require('sequelize');


async function createFilter (data) {
    let filter = {};
    if(data.arrivalAirportId){
        filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId){
        filter.departureAirportId = data.departureAirportId;
    }
    let priceFilter = [];
    if(data.minPrice){
        priceFilter.push({price : { [Op.gte]: data.minPrice }})
    }
    if(data.maxPrice){
        priceFilter.push({price : { [Op.lte]: data.maxPrice }})
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
}
async function createFlight (data) {
    try {
        const flight = await Flights.create(data);
        return flight;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

async function getAllFlights (filter) {
    try{
        const filterObject = await createFilter(filter);
        const flights = Flights.findAll({
            where: filterObject
        });
        return flights;
    } catch (error) {
        console.log("Repository layer Error");
        throw error;
    }
}

async function getFlight (flightId){
    try{
        const flight = await Flights.findByPk(flightId);
        console.log(flightId);
        return flight;
    } catch(error){
        console.log('Repository layer error');
        throw error;
    }
}

async function updateFlight (flightId, data){
    try{
        await Flights.update(data, {
            where:{
                id: flightId
            }
        })
        return true;
    } catch(error){
        throw error;
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateFlight
}