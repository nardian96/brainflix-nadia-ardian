const videos = require('../models/videosModel');


// get list of videos 
function listVideo (req, res) {
    //Calling the function to read into the json file, turning it into JS array of objects, 
    //, mapping each object within the array to return a new array w set properties
    loadVidData((videos) => {
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
    loadVidData((videos) => {
        const vidIndex = videos.findIndex((vidObj) => vidObj.id === vidId)
        if (vidIndex !== -1) {
            res.json(videos[vidIndex])
        }
        else {
            res.status(404).json({ message: `Video with with ID ${vidId} cannot be found`})
        }
    })
}

// upload new video

function addVideo(req, res) {
    if (!req.body.title || !req.body.description || !req.body.url) {
        res.status(400).json({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['title', 'description', 'url']
        });
    }
    res.json(uploadVideo(req.body));
}

// export multiple functions
module.exports = {
    listVideo,
    getVideoByID,
    addVideo
}
