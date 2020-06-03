
const bucketName = 'eunko.workroom';
const bucketRegion = 'ap-northeast-2';
const apiVersion = '2006-03-01';
const accessKeyId = 'AKIAJP7WGZ2JTXOPXX4A';
const secretAccessKey = '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';
const bucketUrl = `https://s3.amazonaws.com/${bucketName}/`;

const s3 = new window.AWS.S3({
  apiVersion: apiVersion,
  params: {
    Bucket: bucketName
  },
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: bucketRegion
});

window.console.log('s3', s3);

s3.listObjects({}, (err, data) => {
  if (err) {
    window.console.log(err.message, err);
  } else {
    window.console.log(data.Contents);
  }
});
