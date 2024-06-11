import fs from 'fs';

const DIR_BUILD = "./build/client/assets";
const DIR_PUBLIC = "./public/assets";
//
const copyAssetDir = async function() {
  try{    
    fs.cpSync(DIR_BUILD, DIR_PUBLIC, { recursive: true });    
  } catch (error) {
    console.error('Error copyAssetDir:', error);
  }
}
//
fs.mkdir(DIR_PUBLIC, (err) => {
  if (err) {
      console.error(err);
  } else {
    copyAssetDir();
  }
});