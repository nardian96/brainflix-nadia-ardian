import React from 'react'
// import Body from './Body'
// import ContentContainer from './ContentContainer';

const MainVideo = (props) => {
    return (
    <>    
        <div className='video__container' >
            <video className='video__item' id={props.video.id} poster={props.video.image}>
            </video>
        </div>
        {/* <Body video={props.video} /> */}
        {/* <ContentContainer video={props.video} /> */}
    </>
    )
}

export default MainVideo;
