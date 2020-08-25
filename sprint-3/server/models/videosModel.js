const fs = require('fs'); 
const path = require('path');
const { v4: uuidv4 } = require('uuid');


//JSON data to read and write
const videosFile = path.join(__dirname, '../database/videos.json')

// Object Constructor for sidebar video
function Video(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
}

const list = JSON.parse(fs.readFileSync('./database/videos.json'))

//post videos to json file
function uploadVideo(data) {
    const videosArray = list;
    const newVideo = new Video(data.title, data.description)
    pushVideo = (newVideo) => {
        return {
            id: newVideo.id,
            title: newVideo.title,
            channel: 'New Channel',
            image: 'https://images.unsplash.com/photo-1468420301707-d5ed0f94e9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
            description: newVideo.description,
            views: "1,000,000",
            likes: "500,768",
            duration: "",
            video: "",
            timestamp: new Date().getTime(),
            comments: [{"name":"John Smith","comment":"Absolutely Stunning. Full of great shots.","id":"1ab6d9f6-da38-456e-9b09-ab0acd9ce818","likes":0,"timestamp":1545162149000},
            {"name":"Jenny Wang","comment":"This makes my travel plans so much more exciting!","id":"cc6f173d-9e9d-4501-918d-bc11f15a8e14","likes":0,"timestamp":1544595784046},
            {"name":"Scott Stephens","comment":"Great videography!!","id":"993f950f-df99-48e7-bd1e-d95003cc98f1","likes":0,"timestamp":1542262984046}]
        }
    }
    videosArray.push(pushVideo(newVideo));
    fs.writeFileSync(videosFile, JSON.stringify(videosArray));
    return videosArray;
}

//Object constructor for new comment
function Comment(name, comment) {
    this.id = uuidv4();
    this.name = name;
    this.comment = comment;
}

function findVideo(id) {
    return list.filter((video) => {
        return id === video.id
    })
}

//post comment on video
function postNewComment(id, commentValue) {
    const videoID = findVideo(id)
    const newComment = new Comment(commentValue.name, commentValue.comment)
    pushComment = (newComment) => {
        return {
            name: newComment.name,
            comment: newComment.comment,
            id: newComment.id,
            likes: 0,
            timestamp: new Date().getTime()
        }
    }
    videoID[0].comments.push(pushComment(newComment));
    const videoData = list;
    const videoIndex = videoData.findIndex((video) => {
        return videoID[0].id === video.id
    })
    console.log(videoIndex)
    videoData.splice(videoIndex, 1, videoID[0]);
    fs.writeFileSync(videosFile, JSON.stringify(videoData));
    return videoData;
}  

//Function for going into the data and turning it into a workable JS object
function loadVidData(callback) {
    fs.readFile('./database/videos.json', (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data);
        callback(videos)
    })
}

// export multiple functions
module.exports = { uploadVideo, postNewComment, findVideo, loadVidData }