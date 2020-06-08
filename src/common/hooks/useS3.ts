import { useState, useEffect, useCallback } from "react";
import {
  bucketName,
  bucketRegion,
  apiVersion,
  accessKeyId,
  secretAccessKey,
} from "../constants/s3";

export function useGetAlbumsFromS3() {
  const [albums, setAlbums] = useState<Common.TabContent>({
    Photography: [],
    Editorial: [],
    More: [],
  });
  useEffect(() => {
    const s3 = new (window as any).AWS.S3({
      apiVersion: apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: bucketRegion,
    });

    s3.listObjects({}, (err: Error, data: { CommonPrefixes: any[] }) => {
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
      }
    });
  }, []);

  return albums;
}

export function useUploadImage() {
  return useCallback((buffer: any, name: any, type: any, id: string) => {
    const s3 = new (window as any).AWS.S3({
      apiVersion: apiVersion,
      params: {
        Bucket: bucketName,
      },
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: bucketRegion,
    });

    const params = {
      ACL: "public-read",
      Body: buffer,
      Bucket: bucketName,
      ContentType: type,
      Key: id,
    };

    return s3.upload(params).promise();
  }, []);
}
