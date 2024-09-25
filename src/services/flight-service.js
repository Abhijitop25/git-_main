const { createFlight, getAllFlights, getFlight, updateFlight } = require('../repository/flight-repository');
const { getAirplane } = require('../repository/airplane-repository')


async function createFlightService(data) {
    try {
        const { airplaneId } = data;
        const airplane  = await getAirplane(airplaneId);
        const flight = await createFlight({...data, totalSeats: airplane.capacity});
        return flight;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    }
}
async function getAllFlightService(data) {
    try {
        const flights = await getAllFlights(data);
        return flights;
    } catch (error) {
        console.log('Service layer error');
        throw error;
    }
}

async function getFlightService(flightId){
    try{
        const flight = await getFlight(flightId);
        console.log(flightId);
        return flight;
    } catch(error){
        console.log('Service Layer Error');
        throw error;
    }
}

async function updateFlightService(flightId, data){
    try{
        const response = await updateFlight(flightId, data);
        return response;
    } catch(error){
        throw error;
    }
}

module.exports = {
    createFlightService,
    getAllFlightService,
    getFlightService,
    updateFlightService
}