const { createCityService, deleteCityService, createCitiesService, getCitiesService } = require('../services/city-service.js');

const getAll = async(req, res) => {
    try{
        const response = await getCitiesService();
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully created a city",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to create City",
            err: error
        })
    }
}

const create = async (req, res) => {
    try{
        const city = await createCityService(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created a city",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to create City",
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try{
        const response = await deleteCityService(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to delete a City",
            err: error
        })
    }
}

const createBulk = async (req, res) => {
    try{
        const cities = await createCitiesService(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "successfully created a cities",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messaage: "Not able to create cities",
            err: error
        })
    }
}


module.exports = {
    create,
    destroy,
    createBulk,
    getAll
}