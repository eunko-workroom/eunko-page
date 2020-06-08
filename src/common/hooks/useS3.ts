import { useState, useEffect, useCallback } from "react";
import {
  bucketName,
  bucketRegion,
  apiVersion,
  accessKeyId,
  secretAccessKey,
} from "../constants/s3";
import AWS, { AWSError, S3 } from "aws-sdk";

export function useGetAlbumsFromS3() {
  const [albums, setAlbums] = useState<Common.TabContent>({
    Photography: [],
    Editorial: [],
    More: [],
  });
  useEffect(() => {
    const s3 = new AWS.S3({
      apiVersion: apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: bucketRegion,
    });

    s3.listObjects(
      { Bucket: bucketName },
      (err: AWSError, data: S3.Types.ListObjectsOutput) => {
        if (err) {
          window.console.log(err.message);
        } else {
          window.console.log("albums", data);
        }
      }
    );
  }, []);

  return albums;
}

export function useUploadImage() {
  return useCallback((buffer: File, name: any, type: any, id: string) => {
    const s3 = new AWS.S3({
      apiVersion: apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: bucketRegion,
    });

    const params: S3.Types.PutObjectRequest = {
      ACL: "public-read",
      Body: buffer,
      Bucket: bucketName,
      ContentType: type,
      Key: id,
    };

    return s3.upload(params).promise();
  }, []);
}
