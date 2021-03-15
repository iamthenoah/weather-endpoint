const express = require('express');
const axios = require('axios');
const router = express.Router();
module.exports = router;

const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=2017-01-01T00%3A00%3A00&endDateTime=2021-01-01T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=metric&locationMode=single&key=21C8DJHWCKLUKNSPTDEDNA3AW&dataElements=default&locations=Belgium"
const _url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Netherlands?unitGroup=metric&key=ASR7X3K6EKCFLNE85J9VG5E4C";

router.get('/info/basic', async(req, res) => {

    try {
        const data = await axios.get(url);

        console.log(data.data);

        res.json(data.data);
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500);
    }

});
