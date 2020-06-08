const bucketName = "eunko.workroom";
const bucketRegion = "ap-northeast-2";
const apiVersion = "2006-03-01";
const accessKeyId = "AKIAT4K7DKVDWURUQSEO";
const secretAccessKey = "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";
const bucketUrl = `https://s3.amazonaws.com/${bucketName}/`;

const s3 = new window.AWS.S3({
  apiVersion: apiVersion,
  params: {
    Bucket: bucketName,
  },
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: bucketRegion,
});

window.console.log("s3", s3);

s3.listObjects({}, (err, data) => {
  window.console.log("listObjects");
  if (err) {
    window.console.log("err");
    window.console.log(err.message, err);
  } else {
    window.console.log("data");
    window.console.log(data.Contents);
  }
});
