const fs = require('fs'); 
const path = require('path');
const { v4: uuidv4 } = require('uuid');


//JSON data to read and write
const videosFile = path.join(__dirname, '../database/videos.json')

// Object Constructor
function Video(title, description, url) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.url = url;
}

// // list of videos
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

//Function for going into the data and turning it into a workable JS object
function loadVidData(callback) {
    // async readFile method from file systems module on node. Requires callback to send response
    fs.readFile('./database/videos.json', (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data); //converting text file into an actual array of objects on JS
        callback(videos)
    })
}

// export multiple functions
module.exports = { uploadVideo, loadVidData }