const express = require('express');
const axios = require('axios');
const router = express.Router();
module.exports = router;


router.get('/location/:loc', async(req, res) => {

    const loc = req.param.loc | 'Netherlands';
    const url = getUrlWithLocation(loc)

    try {
        const data = await axios.get(url);
        res.json(data.data);
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});


function getUrlWithLocation(location) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=2017-06-01T00%3A00%3A00&endDateTime=2021-01-01T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=metric&locationMode=single&key=21C8DJHWCKLUKNSPTDEDNA3AW&dataElements=default&locations=${location}`;
}