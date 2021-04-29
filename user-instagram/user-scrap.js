const userInstagram = require("./index");


function getInstaProfileInformation() {
  // Gets informations about a user
  // userInstagram('rakulpreet') // Same as getUserData()
  // .then((result) => {
  //     console.log('Videos count::::::::');
  //     const videos = result.posts.filter(ele => ele.isVideo);
  //     console.log(videos.length);

  // })
  // .catch(console.error);
  //https://www.instagram.com/p//?utm_source=ig_web_copy_link
  // Gets information about a post
  userInstagram.getPostData('COKm4qJgA0H')
    .then(console.log)
    .catch(console.error)  
}

getInstaProfileInformation();
const instagram_download = require ('@juliendu11/instagram-downloader');

(async () => {
const value = await instagram_download.downloadMedia('https://www.instagram.com/p/CN4nPh8h3ja/', 
  '/Users/amar')
console.log(value)
})();
