import React from 'react'
import VideoListItems from './VideoListItems'

function VideoList(props) {
    return (
        <ul className="video__list">
            {props.videos
            .filter((video) => video.id !== props.mainVideoID)
            .map((video) => (
                <VideoListItems key={video.id} videoItem={video} />
            ))}
        </ul>
    )
}

export default VideoList
