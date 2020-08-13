import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function VideoListItems(props) {
    console.log(props.videoItem.image)
    return (
        <li className="video__item">
            <Link to={`/video/${props.videoItem.id}`}>
            <img src={props.videoItem.image} />
            <div className="video__item-text">
                <h4>{props.videoItem.title}</h4>
                <p>{props.videoItem.channel}</p>
            </div>
            </Link>
        </li>
    );
}

export default VideoListItems
