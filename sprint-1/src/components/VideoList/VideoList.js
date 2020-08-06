import React from 'react'
import VideoListItems from './VideoListItems'

function VideoList(props) {
    return (
        <ul className="video__list">
            {props.videos.map((video, index) => (
                <VideoListItems key={index}/>
            ))}
        </ul>
    )
}

export default VideoList
