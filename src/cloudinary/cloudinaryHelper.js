import axios from "axios";
// import { cloudName, defaultUploadTag, uploadPreset } from "./cloudinaryConfig";

export const upload = async({ file, fileType, successCallback }) => {

  const url = 'http://localhost:8888/.netlify/functions/cloudinary';
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "demopreset");
  data.append("tags", "product_gallery_tags");

  const res = await axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "no-cors",
        "Access-Control-Allow-Headers": "*"
      }
    })

    console.log(res.data)

    successCallback(res.data)
    
};
