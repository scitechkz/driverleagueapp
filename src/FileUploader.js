// FileUploader.js
import React, { useState } from 'react';
import { s3 } from './aws-config'; // Import the AWS SDK configuration

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const params = {
      Bucket: 'drivers-league',
      Key: selectedFile.name,
      Body: selectedFile,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Error uploading file:', err);
      } else {
        console.log('File upload successful:', data.Location);
        // You can perform further actions here after successful upload.
      }
    });
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
