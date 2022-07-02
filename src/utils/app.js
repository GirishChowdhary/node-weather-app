const getWeather = require('./weather.js');

const location = process.argv[2];
if (!location) {
    console.log('Please provide location');
}
else {
    getWeather(location, (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res.current.temperature);
        }
    })
}