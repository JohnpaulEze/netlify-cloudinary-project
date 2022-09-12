const Cloudinary = require('cloudinary').v2
require('dotenv').config
const MultipartParser = require('lambda-multipart-parser')
const Path = require('path')

const handler = async(event) => {

    try {
        Cloudinary.config({
            cloud_name: 'johnpaulopera',
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })

        const uploadData = await MultipartParser.parse(event)
        const b64 = uploadData.files[0].content.toString('base64');
        const mimeType = uploadData.files[0].contentType; 

        const img = await Cloudinary.uploader.upload(`data:${mimeType};base64,${b64}`, {
            public_id: `gallery/${uploadData.productName}`,
            tags: `${uploadData.tags}`, 
            upload_preset: `${uploadData.upload_preset}`

        })
        return {
            statusCode: 200,
            body: JSON.stringify({
                image: img 
            })
           }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    handler
}