const videos = require('../data/videos.json');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

router.route("/")
  .get((req, res) => {
      let videos = fs.readFileSync('./data/videos.json');
      videos = JSON.parse(videos);
      return res.json(videos);
  });

router.route("/:videoId")
  .get((req, res) => {
    let videodetails = fs.readFileSync('./data/videosdetails.json');
    videodetails = JSON.parse(videodetails);
    const selectedVideo = videodetails.find(video => video.id === req.params.videoId)
    return res.json(selectedVideo);
  })

router.route("/upload")
.post((req, res) => {
  console.log("hello")

    let videosdetails = fs.readFileSync('./data/videosdetails.json');
    videosdetails = JSON.parse(videosdetails);
    console.log(videosdetails);

    const newVideoDetails = {
        id: uuidv4(),
        title: req.body.title,
        channel: 'New Uploader',
        image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        description: req.body.description,
        views: 0,
        likes: 0,
        duration: '1:00',
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: []
    }
    console.log(newVideoDetails);

    videosdetails.push(newVideoDetails);
    fs.writeFileSync('./data/videosdetails.json', JSON.stringify(videosdetails));

    res.status(201).json(newVideoDetails);
})

// router.route("/")
//     .post((req, res) => {
//         let items = fs.readFileSync('./data/items.json');
//         items = JSON.parse(items);


//         // handle our request data and save it to our items
//         const newItem = {
//             id: uuidv4(),
//             name: req.body.name,
//             category: req.body.category
//         }

//         items.push(newItem);

//         fs.writeFileSync('./data/items.json', JSON.stringify(items));

//         res.status(201).json(newItem);
//     })

module.exports = router;