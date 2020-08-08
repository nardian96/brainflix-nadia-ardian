import React from 'react'
import ContentContainer from './ContentContainer';

const MainVideo = (props) => {
    return (
    <>    
        <div className='video__container' >
            <video className='video__item' id={props.video.id} poster={props.video.image}>
            </video>
        </div>
        <ContentContainer video={props.video} />
    </>
    )
}

export default MainVideo;
