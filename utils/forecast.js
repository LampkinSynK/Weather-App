const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=aa4fb2b0784ee4951fa92eb2d5fc8d2d&query=${latitude},${longitude}&units=f`

    request({ url, json: true},(error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined ,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees`)
        }
    })
}

module.exports = forecast