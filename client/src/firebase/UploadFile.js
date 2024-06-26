import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './config';

//Not actually using this function atm, but is similar to what is used in ImageTest.js

//Gets file and filepath... Want to store filepath in DB
const uploadFile = (file, filePath) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = ref(storage, filePath);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};

export default uploadFile;