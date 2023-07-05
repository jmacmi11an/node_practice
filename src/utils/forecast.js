const request = require('request')

const forecast = (lat, lon, callback) => {
    let url = "http://api.weatherstack.com/current?access_key=d29d42abb6ec22697a336d6bb1912209&query=" + lon + "," + lat + "&units=f";

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the server')
        } else if (body.error) {
            callback('Unable to find the location')
        } else {
            const city = body.location.name
            const data = body.current
            callback(undefined, `In ${city}, the weather is ${data.weather_descriptions}. It is currently ${data.temperature} degrees out. There is a ${data.precip} percent chance of rain.`)
        }
    })
}

module.exports = forecast