
const bucketName = 'eunko.workroom';
const bucketRegion = 'us-east-2';
const IdentityPoolId = 'us-east-2:0414f792-1ba0-41a4-aa67-c12a2661124f';
const credentials = new window.AWS.CognitoIdentityCredentials({
  IdentityPoolId: IdentityPoolId
});
const apiVersion = '2006-03-01';
const bucketUrl = `https://s3.amazonaws.com/${bucketName}/`;

window.AWS.config.update({
  region: bucketRegion,
  credentials: credentials
});

const s3 = new window.AWS.S3({
  apiVersion: apiVersion,
  params: {
    Bucket: bucketName
  }
});

window.console.log('s3', s3);

s3.listObjects({Delimiter: '/'}, (err, data) => {
  if (err) {
    window.console.log(err.message, err);
  } else {
    var albums = data.CommonPrefixes.map((commonPrefix) => {
      var prefix = commonPrefix.Prefix;
      var albumName = decodeURIComponent(prefix.replace('/', ''));
      return albumName;
    });
    window.console.log('albums', albums);
  }
});
