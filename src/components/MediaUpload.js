import { useState } from "react";
import { Button, Card, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { upload } from "../cloudinary/cloudinaryHelper";
import { useContext } from "react";
import GalleryContext from "../context/GalleryContext";

const MediaUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [userInput, setUserInput] = useState({
    tag: '',
    productName: ''
  })

  const navigate = useNavigate();

  const myGallery = useContext(GalleryContext);

  const uploadSelection = () => {
    if (selectedFiles.length === 0) {
      message.error("You need to upload a media file first");
    } else {
      setIsUploading(true);
      selectedFiles.forEach((file, index) => {
        const fileType = file["type"].split("/")[0];
        upload({
          file,
          fileType,
          userInput,
          successCallback: (response) => {
            if (index === selectedFiles.length - 1) {
              message.success("Images uploaded successfully");
              myGallery.update({
                mediaAssets: [
                  { tag: userInput.tag },
                ]
              });
              setIsUploading(false);
              navigate("/gallery");
            }
          }
        });
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput({
      ...userInput,
      [e.target.name]: value
    });
    
    // setUserTag(e.target.value)
  }

  const props = {
    multiple: true,
    onRemove: (file) => {
      setSelectedFiles((currentSelection) => {
        const newSelection = currentSelection.slice();
        const fileIndex = currentSelection.indexOf(file);
        newSelection.splice(fileIndex, 1);
        return newSelection;
      });
    },
    beforeUpload: (file) => {
      setSelectedFiles((currentSelection) => [...currentSelection, file]);
      return false;
    },
    showUploadList: true
  };
  
  return (
    <Card
      style={{ margin: "auto", width: "50%" }}
      actions={[
        <Button type="primary" loading={isUploading} onClick={uploadSelection}>
          Upload
        </Button>
      ]}
    >
      <Upload.Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <UploadOutlined />
        </p>
        <p className="ant-upload-text">Click to Select Files</p>
      </Upload.Dragger>
      <input name="tag" type='text' onChange={handleChange} value={userInput.tag} placeholder='Enter a Tag' />
      <input name="productName" type="text" onChange={handleChange} value={userInput.productName} placeholder='Enter Product Name' />
    </Card>
  );
};

export default MediaUpload;
