import React from 'react';
import { Link } from 'react-router-dom';

function VideoListItems(props) {
    return (
        <li className="video__item">
            <Link to={`/video/${props.videoItem.id}`}>
            <img src={props.videoItem.image} alt='Video Thumbnail'/>
            <div className="video__item-text">
                <h4>{props.videoItem.title}</h4>
                <p>{props.videoItem.channel}</p>
            </div>
            </Link>
        </li>
    );
}

export default VideoListItems
