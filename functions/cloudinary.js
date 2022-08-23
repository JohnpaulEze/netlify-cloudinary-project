const Cloudinary = require('cloudinary').v2
require('dotenv').config
const MultipartParser = require('lambda-multipart-parser')

const handler = async(event) => {

    try {
        Cloudinary.config({
            cloud_name: 'johnpaul',
            REACT_APP_UPLOAD_PRESET: 'demopreset',
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })

        let image = ''

        MultipartParser.parse(event).then(async formData => {

            const b64 = formData.files[0].content.toString('base64');
            const mimeType = formData.files[0].contentType; 

            console.log(formData.files[0].content.toString('base64'))

            const img = await Cloudinary.uploader.upload(`data:${mimeType};base64,${b64}`, {
                public_id: `gallery/${formData.files[0].filename}`,
                tags: `${formData.tags}`

               })

               image += img
        })
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: image
            })
           }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    handler
}