const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoiam1hY21pbGwiLCJhIjoiY2xpZHVsbDR3MHJibjNsbXV0d3ZlaTE1aiJ9.e8NqsEJf7FYSVdR5vitDhg&limit=1"

    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0){
            callback('Cannot find that location')
        } else {
            const lat = body.features[0].center[1]
            const long = body.features[0].center[0]
            const place = body.features[0].place_name;
            const data = {
                lat,
                long,
                place
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode