import React from 'react' 

const MainVideo = (props) => {
    return (
    <>    
        <div className='main-video__container' >
            <video className='main-video__item' id={props.video.id} poster={props.video.image}>
            </video>
        </div>
    </>
    )
}

export default MainVideo;
