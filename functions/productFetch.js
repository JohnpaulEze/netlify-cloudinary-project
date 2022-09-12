const Cloudinary = require('cloudinary').v2
require('dotenv').config

const handler = async() => {

    try {
        Cloudinary.config({
            cloud_name: 'johnpaulopera',
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })

        const fetchedProducts = await Cloudinary.api
                                                .resources_by_tag("opera")
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                image: fetchedProducts
            })
           }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    handler
}