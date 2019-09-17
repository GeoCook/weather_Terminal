const {getWeather}=require('./getWeather')
const {getLocation}=require('./getLocation')
const colors=require('colors')
const figlet=require('figlet')
const {promisify}=require('util')
const promisifyFiglet=promisify(figlet)


const main= async (place)=>{
    const location = await getLocation(place)
    const weather = await getWeather(location)
    const temp = Math.round(((weather.temperature-32)*5)/9)

    const data = await promisifyFiglet('Weather')
    console.log(data)
    console.log(`The temperature in ${location.name.red} is ${colors.blue(temp)}°C and the probability of rain is ${weather.precipProbability}`)
}

main(process.argv[2])