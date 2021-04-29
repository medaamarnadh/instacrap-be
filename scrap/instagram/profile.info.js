const router = require('express').Router();
const fs = require('fs');
const { route } = require('../../accounts/accounts.controller');
const UserInstagram = require('../../user-instagram');
const db = require('../../_helpers/db');
const authorize = require('../../_middleware/authorize');
const { getShortCode, downloadVideo } = require('../../_helpers/util');

router.post('/info/:username', authorize(), async (req, res, next) => {
    try {
        const result = await UserInstagram.getUserData(req.params.username);
        const posts = result.posts.map(ele => {
            return {
                sourceInfo: ele,
                fetchedBy: req.user.id
            }
        });
        await db.InstaPost.insertMany(posts);
        res.send({
            ...result
        });
    } catch (err) {
        console.log(err)
        next(err);
    }
});

router.post('/post/info', authorize(), async (req, res, next) => {
    try {
        const {
            postUrl
        } = req.body;
        const postInfo = await db.InstaPost.findOne({
            'sourceInfo.url': postUrl
        });
        const result = await downloadVideo(postInfo.sourceInfo.videoUrl, postInfo.sourceInfo.shortCode, '/Users/amar')
        postInfo.isProcessed = true;
        await postInfo.save()
        // const result = await UserInstagram.getPostData(postInfo.sourceInfo.videoUrl);
        // const instaPost = new db.InstaPost({
        //     sourceInfo: result,
        //     fetchedBy: req.user.id
        // });
        res.send({
            ...result
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
});


module.exports = router;
