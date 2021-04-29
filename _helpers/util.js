const Path = require('path');
const fs = require('fs');
const axios = require('axios')
/**
 * getShortCode
 * @param {String} postUrl 
 * @description Returns the short code of the post or reel
 */
function getShortCode(postUrl) {
    let postContent = postUrl.split('/');
    postContent.pop();
    return postContent.pop();
}
/**
 * downloadVideo
 * @param {String} videoUrl 
 * @param {String} shortCode 
 * @param {String} savePath 
 * @returns 
 */
async function downloadVideo(videoUrl, fileName, savePath = '/Users/amar') {
    console.log(fileName);
    const path = Path.resolve(savePath, `${fileName}.mp4`)
    const writer = fs.createWriteStream(path);
    console.log('videoUrl::::::', videoUrl);
    const response = await axios({
        url: videoUrl,
        method: 'GET',
        responseType: 'stream'
      })
    
      response.data.pipe(writer)
    
      return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
      })
}
module.exports = {
    getShortCode, 
    downloadVideo
};
