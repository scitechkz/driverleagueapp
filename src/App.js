// App.js
import React from 'react';
import FileUploader from './FileUploader';

const App = () => {
  return (
    <div>
      <h1>File Upload to S3 Bucket</h1>
      <FileUploader />
    </div>
  );
};

export default App;
