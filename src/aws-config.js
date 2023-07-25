// aws-config.js
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAWY4FV6MVUNQCTB66',
  secretAccessKey: '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',
  region: 'us-east-1',
});

export const s3 = new AWS.S3();
