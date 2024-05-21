import {useEffect, useState} from "react";

const BASE_URL = 'https://raw.githubusercontent.com/luisalcarasr/cristy/pictures';

export const usePictures = (): string[] => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/manifest.json`).then((response) => {
      return response.json();
    }).then(({files}) => {
      setPictures(
        files
          .filter((file: string) => file.endsWith('.jpg'))
          .map((file: string) => `${BASE_URL}/${file}`)
      );
    })
  }, [])
  return pictures;
}
