const videos = require('../models/videosModel');


// get list of videos 
function listVideos (req, res) {
    videos.loadVidData((videos) => {
        const sideBarVideos = videos.map((videoObj) =>{
            return {
                id: videoObj.id,
                title: videoObj.title,
                channel: videoObj.channel,
                image: videoObj.image
            }
        })
    res.json(sideBarVideos);    
    })
}

// get video by ID
function getVideoByID(req, res) {
    const vidId = req.params.id
    videos.loadVidData((videos) => {
        const vidIndex = videos.findIndex((vidObj) => vidObj.id === vidId)
        if (vidIndex !== -1) {
            res.json(videos[vidIndex])
        }
        else {
            res.status(404).json({ message: `Video with with ID ${vidId} cannot be found`})
        }
    })
}

// post video comments
function addComment(req, res) {
    console.log(req.params)
    console.log(req.body)
    const vidId = req.params.id
    if (videos.findVideo(req.params.id).length === 0) {
        res.sendStatus(404)
    } else {
        videos.postNewComment(vidId, req.body)
        res.sendStatus(200)
    }
}

// upload new video
function addVideo(req, res) {
    if (!req.body.title || !req.body.description) {
        res.status(400).json({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['title', 'description']
        });
    }
    res.json(videos.uploadVideo(req.body));
}

// export multiple functions
module.exports = {
    listVideos,
    getVideoByID,
    addComment,
    addVideo
}
