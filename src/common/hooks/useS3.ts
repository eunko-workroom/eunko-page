import { useState, useEffect, useCallback } from "react";

import AWS, { S3 } from "aws-sdk";
import {
  bucketName,
  bucketRegion,
  apiVersion,
  accessKeyId,
  secretAccessKey
} from "../constants/.s3";

function convertUint8Array(arr: Uint8Array) {
  let str = "";
  for (var i = 0; i < arr.byteLength; i++) {
    str += String.fromCharCode(arr[i]);
  }

  try {
    const serializedData = JSON.stringify(str);
    const stringData = JSON.parse(serializedData);
    const data = JSON.parse(stringData);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export function useGetAlbumsFromS3() {
  const [albums, setAlbums] = useState<Common.TabContent>({
    Main: "",
    Photography: [],
    Editorial: [],
    More: [],
  });
  useEffect(() => {
    const s3 = new AWS.S3({
      apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId,
      secretAccessKey,
      region: bucketRegion,
    });

    s3.getObject({ Bucket: bucketName, Key: "project.json" }, function (
      err,
      data
    ) {
      if (err) console.log(err, err.stack);
      else {
        if (data.Body) {
          const albums = convertUint8Array(
            data.Body as Uint8Array
          ) as Common.TabContent;

          setAlbums(albums);
        }
      }
    });
  }, []);

  return albums;
}

export function useUploadToS3() {
  return useCallback((p: S3.Types.PutObjectRequest) => {
    const s3 = new AWS.S3({
      apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId,
      secretAccessKey,
      region: bucketRegion,
    });

    return s3
      .upload({ ACL: "public-read", Bucket: bucketName, ...p })
      .promise();
  }, []);
}

export function useDeleteS3File() {
  return useCallback((p: S3.Types.DeleteObjectRequest) => {
    const s3 = new AWS.S3({
      apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId,
      secretAccessKey,
      region: bucketRegion,
    });

    return s3.deleteObject({ Bucket: bucketName, ...p }).promise();
  }, []);
}
