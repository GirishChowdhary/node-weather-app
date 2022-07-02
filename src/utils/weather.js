const request = require('request');


const weather = (place, callback)=>{
    let url = "http://api.weatherstack.com/current?access_key=595213e2fd301aaeb09efd77f3764bd5&query=" + place;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Cannot connect',undefined)
        } else if (res.body.error) {
            callback('Cannot find location',undefined)
        } else {
            callback(undefined,res.body)
        }
    })
}


module.exports =weather;