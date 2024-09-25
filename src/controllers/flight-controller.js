const { createFlightService, getAllFlightService, getFlightService, updateFlightService } = require('../services/flight-service.js');



const create = async (req, res) => {
    try{
        const flight = await createFlightService(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            err: {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to create flight",
            err: error
        })
    }
}

/*
example : req.body = 
{
    "flightNumber": "QF103",
    "airplaneId": 2,
    "departureAirportId": 1,
    "arrivalAirportId": 2,
    "arrivalTime": "2019-04-28T14:45:15",
    "departureTime": "2019-04-28T12:45:15",
    "price": 5000,
    "boardingGate": "T3"
}


*/

const getAll = async (req, res) => {
    try{
        const flights = await getAllFlightService(req.query);
        return res.status(201).json({
            data: flights,
            success: true,
            message: "successfully fetched the flights",
            err: {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to fetch the flights",
            err: error
        })
    }
}

const getIt = async (req, res) => {
    try{
        
        const flight = await getFlightService(req.params.id);
        
        return res.status(201).json({
            data: flight,
            success: true,
            message: "successfully fetched the flight",
            err: {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to fetch the flight",
            err: error
        })
    }
}

const update = async (req, res) => {
    try{
        const response = await updateFlightService(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully updated the flight",
            err: {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to update the flight",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll,
    getIt,
    update
}