// aws-config.js
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-1',
});

export const s3 = new AWS.S3();
