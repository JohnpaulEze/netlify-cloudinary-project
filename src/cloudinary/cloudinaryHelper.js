import axios from "axios";
// import { cloudName, defaultUploadTag, uploadPreset } from "./cloudinaryConfig";

export const upload = async({ file, fileType, successCallback }) => {

  const url = 'http://localhost:8888/.netlify/functions/cloudinary';
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "demopreset");
  data.append("tags", "cloudinary_interactive_gallery");

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

/*   const url = `https://api.cloudinary.com/v1_1/johnpaul/${fileType}/upload`;
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "testpreset");
  data.append("tags", "cloudinary_interactive_gallery");

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => successCallback(response.data)); */
};
