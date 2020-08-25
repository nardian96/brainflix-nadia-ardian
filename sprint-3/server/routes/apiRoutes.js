const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');


router.get('/', videosController.listVideos);
router.get('/videos', videosController.listVideos);
router.get('/videos/:id', videosController.getVideoByID);
router.post('/videos/:id/comments', videosController.addComment);
router.post('/videos', videosController.addVideo);


module.exports = router;

