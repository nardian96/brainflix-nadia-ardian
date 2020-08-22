const express = require('express');
const { get } = require('http');
const router = express.Router();
const fs = require('fs'); //file system module
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// GET '/' endpoint
router.get('/', (req, res) => {
    res.redirect('/videos')
})

// GET '/videos' endpoint
router.get('/videos', (req, res) => {
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
})

//Function for going into the data and turning it into a workable JS object
loadVidData = (callback) => {
    // async readFile method from file systems module on node. Requires callback to send response
    fs.readFile('./database/videos.json', (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data); //converting text file into an actual array of objects on JS
        callback(videos)
    })
}

// GET '/videos/:id' endpoint  
router.get('/videos/:id', (req, res) => {
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
})    

// POST '/videos'

const videosFile = path.join(__dirname, '../database/videos.json')

// Object Constructor
function Video(title, description, url) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.url = url;
}

// list of videos
// function list() {
//     const data = fs.readFile(videosFile);
//     return JSON.parse(data);
// }

const list = JSON.parse(fs.readFileSync('./database/videos.json'))

//post videos to json file
function uploadVideo(data) {
    const videosArray = list;
    const newVideo = new Video(data.title, data.description, data.url)
    pushVideo = (newVideo) => {
        return {
            id: uuidv4,
            title: newVideo.title,
            channel: 'New Channel',
            image: newVideo.url,
            description: newVideo.description,
            views: "",
            likes: "",
            duration: "",
            video: "",
            timestamp: new Date().getMilliseconds,
            comments: []
        }
    }
    videosArray.push(pushVideo(newVideo));
    fs.writeFileSync(videosFile, JSON.stringify(videosArray));
    return videosArray;
}

router.post('/videos', (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.url) {
        res.status(400).json({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['title', 'description', 'url']
        });
    }
    res.json(uploadVideo(req.body));
})


// // '/register'
// pickRandom = (array) => {
//     let randomKey = array[Math.floor(Math.random() * array.length)];
//     return randomKey
// }

// const apiKeys = [
//     {
//         "api_key": "8e23bffb-7e5e-4f67-840a-15cf7cb9f44e"
//     },
//     {
//         "api_key": "397fe3d5-14a3-4742-bedc-4fdb6c82fc53"
//     },
//     {
//         "api_key": "a1d23052-4c9f-44b7-bd38-22cd5941ccde"
//     }]

// router.get('/register', (req, res) => {
//     res.json(pickRandom(apiKeys))
// })

// // '/register' route with api_keys
// getKey = (array) => {
//     let listOfKeys = []
//     array.forEach(item => 
//         listOfKeys.push((Object.values(item)).toString())
//     )
//     return JSON.stringify(listOfKeys)
// }

// const listOfKeys = getKey(apiKeys)

// for (let key = 0; key < listOfKeys.length; key++) {
//     router.get(`/videos?api_key=${key}`, (req, res) => {
//         res.send('It works!')
//     })
// }

module.exports = router;