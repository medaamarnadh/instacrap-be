require('rootpath')();
const fs = require('fs');
const csvtosjon = require('csvtojson');
const db = require('_helpers/db');

(async () => {
    const jsonArray=await csvtosjon().fromFile('731-insta.csv');
    const instaLinks = jsonArray.map(ele => {
        return {
            ...ele,
            isProcessed: false
        }
    });
    console.log(instaLinks);
    //const result = await db.InstaLink.insertMany(instaLinks);
    console.log('Storage completed successfully...');
})();


