import axios from "axios";

export const upload = async({ file, fileType, userInput, successCallback }) => {

  const {tag, productName} = userInput
  const url = 'http://localhost:8888/.netlify/functions/cloudinary';
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "demo_preset");
  data.append("tags", tag);
  data.append("productName", productName);

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
