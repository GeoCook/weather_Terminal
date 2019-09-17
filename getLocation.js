const request=require('request')
const {promisify}=require('util')

const promisifiedRequest=promisify(request)

const apiKey="57db62068091c7559baca4aef82dfc60"

const getLocation = async (place) => {
    try{
        let data = await promisifiedRequest(
            {url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiZ2VvYyIsImEiOiJjazBucWt2YWowMmZnM2JxcnhuOG90YTN6In0.8tUCkSkuDdPFkwF9WbS85Q`,
            json:true})
            return ({
                name: data.body.features[0].place_name,
                lng: data.body.features[0].center[1],
                lat: data.body.features[0].center[0],
            })
    } catch (error){
        console.log("oops")
    }
}


module.exports={
    getLocation
}

