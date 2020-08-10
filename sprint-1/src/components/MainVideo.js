import React from 'react' 
import PlayButton from '../assets/icons/SVG/Icon-play.svg'
import ExpandButton from '../assets/icons/SVG/Icon-fullscreen.svg'
import VolumeButton from '../assets/icons/SVG/Icon-volume.svg'

const MainVideo = (props) => {
    return (
    <>    
        <section className='main-video__container' >
            <div className='main-video__controls'>
                <button className='controls__button'><img src={PlayButton}/></button>
                <div className='controls__progress-bar'>
                    <div className='controls__progress-timeline'></div>
                    <div className='controls__progress-text'>0:00 / 0:42</div>
                </div>
                <div className='controls__button-group'>    
                    <button className='controls__button-group--item'><img src={ExpandButton}/></button>
                    <button className='controls__button-group--item'><img src={VolumeButton}/></button>
                </div>
            </div>
            <video className='main-video__item' id={props.video.id} poster={props.video.image}>
            </video>
        </section>
    </>
    )
}

export default MainVideo;
