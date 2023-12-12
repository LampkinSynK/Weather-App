const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=cc86eb1bcef8293633e78cec6a4c7c55&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees`)
    }
})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamF5bGluYzIxIiwiYSI6ImNscTFhdmViYzA2dnoybHBkZ3d1aHd2N3MifQ.TG-tz5jyuk8f9zW_EY0M2A&limit=1"

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services.')
    } else if (response.body.features.length === 0){
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
    
})