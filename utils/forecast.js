const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=bebb3e1451d5858de9d2f6e039d371b6&query=${latitude},${longitude}&units=f`

    request({ url: url, json: true},(error, response) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined ,`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees`)
        }
    })
}

module.exports = forecast