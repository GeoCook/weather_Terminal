const request=require('request')
const {promisify}=require('util')

const promisifiedRequest=promisify(request)
const apiKey="57db62068091c7559baca4aef82dfc60"

const getWeather = async (locationData) => {
    try{
        let data = await promisifiedRequest(
            {url: `https://api.darksky.net/forecast/${apiKey}/${locationData.lng},${locationData.lat}`,
            json:true})
            return (data.body.currently)
    } catch (error){
        console.log("oopsie")
    }
}



module.exports={
    getWeather
}




// const getWeather = async () => {
//     let data = await promisifiedRequest(
//         {url: `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`,
//          json:true})
//          console.log(data.body.currently)
// }




// request({url: `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`, json:true},(error,response)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         const data = response.body
//         console.log({temp:data.currently.temperature,rain:data.currently.precipProbability})
//     }
// })