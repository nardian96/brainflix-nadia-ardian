import React from 'react'
import ViewsIcon from '../assets/icons/SVG/Icon-views.svg'
import LikesIcon from '../assets/icons/SVG/Icon-likes.svg'

const ContentContainer = (props) => {
    console.log(props)
    return (
    <>
        <section>
            <div className='main-video__description'>
                <h1 className='description__header'>{props.video.title}</h1>
                <div className='description__subheader'>
                    <div className='description__subheader-one'>
                        <h5>By {props.video.channel}</h5>
                        <p>{props.video.timestamp}</p>
                    </div>
                    <div className='description__subheader-two'>
                        <div>
                            <img src={ViewsIcon}/>
                            <p>{props.video.views}</p>
                        </div>
                        <div>
                            <img src={LikesIcon}/>
                            <p>{props.video.likes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='description__text'>{props.video.description}</p>
        </section>
    </>    
    )
}

export default ContentContainer
