import React from 'react'

function VideoListItems(props) {
    console.log(props.videoItem.image)
    return (
        <li className="video__item">
            <img src={props.videoItem.image} />
            <div className="video__item-text">
                <h4>{props.videoItem.title}</h4>
                <p>{props.videoItem.channel}</p>
            </div>
        </li>
    );
}

export default VideoListItems
