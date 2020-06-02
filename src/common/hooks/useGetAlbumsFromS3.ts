import { useState, useEffect } from "react";
import {
  bucketName,
  bucketRegion,
  IdentityPoolId,
  apiVersion,
} from "../constants/s3";

function getAWS() {
  return (window as any).AWS;
}

function useGetAlbumsFromS3() {
  const [albums, setAlbums] = useState<any[]>([]);
  useEffect(() => {
    const AWS = getAWS();
    const credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId,
    });

    AWS.config.update({
      region: bucketRegion,
      credentials: credentials,
    });

    const s3 = new AWS.S3({
      apiVersion: apiVersion,
      params: {
        Bucket: bucketName,
      },
    });

    window.console.log("s3", s3, s3.listObjects);

    s3.listObjects(
      { Delimiter: "/" },
      (err: { message: any }, data: { CommonPrefixes: any[] }) => {
        if (err) {
          window.console.log(err.message, err);
        } else {
          console.log("!!!!", data);
          var albums = data.CommonPrefixes.map((commonPrefix) => {
            var prefix = commonPrefix.Prefix;
            var albumName = decodeURIComponent(prefix.replace("/", ""));
            return albumName;
          });
          window.console.log("albums", albums);
          setAlbums(albums);
        }
      }
    );
  }, []);

  return albums;
}

export default useGetAlbumsFromS3;
