//deletes contents of /build and /dist
//creates necessary subfolders
//copy elements from /src/public to /build (images, scripts, etc.)

const fs = require('fs');

const build = 'build/';
const images = 'build/images/';
const css = 'build/css/';
const js = 'build/js/';
const micropages = 'build/micropages/';


const publicImages = 'src/public/images/';
const publicCss = 'src/public/css/';
const publicJs = 'src/public/js/';



fs.readdirSync(images).forEach((file) => {
  try {
    // console.log(images + file);
    fs.unlinkSync(images + file);
  } catch(err) {
    console.log(err);
  }
});

fs.rmdirSync(images);



fs.readdirSync(css).forEach((file) => {
  try {
    // console.log(css + file);
    fs.unlinkSync(css + file);
  } catch(err) {
    console.log(err);
  }
});

fs.rmdirSync(css);

fs.readdirSync(micropages).forEach((file) => {
  try {
    // console.log(css + file);
    fs.unlinkSync(micropages + file);
  } catch(err) {
    console.log(err);
  }
});

fs.rmdirSync(micropages);


fs.readdirSync(js).forEach((file) => {
  try {
    // console.log(css + file);
    fs.unlinkSync(js + file);
  } catch(err) {
    console.log(err);
  }
});

fs.rmdirSync(js);

fs.readdirSync(build).forEach((file) => {
  try {
    // console.log(build + file);
    fs.unlinkSync(build + file);
  } catch(err) {
    console.log(err);
  }
});

// these two need to go after I delete the clutter in the main build folder
 fs.mkdirSync(images);
 fs.mkdirSync(css);
 fs.mkdirSync(js);
 fs.mkdirSync(micropages);


 fs.readdirSync(publicImages).forEach(file => {
   try {
     fs.copyFileSync('src/public/images/' + file, 'build/images/' + file);
   } catch(err) {
     console.log(err);
   }
 });

 fs.readdirSync(publicCss).forEach(file => {
   try {
     fs.copyFileSync('src/public/css/' + file, 'build/css/' + file);
   } catch(err) {
     console.log(err);
   }
 });


  fs.readdirSync(publicJs).forEach(file => {
    try {
      fs.copyFileSync('src/public/js/' + file, 'build/js/' + file);
    } catch(err) {
      console.log(err);
    }
  });
