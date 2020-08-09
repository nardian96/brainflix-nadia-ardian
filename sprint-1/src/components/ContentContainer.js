import React from 'react'
// import CommentSection from './CommentSection/CommentSection'

const ContentContainer = (props) => {
    console.log(props)
    return (
    <>
        <section>
            <div className='video__description'>
                <h1 className='description__header'>{props.video.title}</h1>
                <div className='description__subheader'>
                    <div className='description__subheader-one'>
                        <h5>{props.video.channel}</h5>
                        <p>{props.video.timestamp}</p>
                    </div>
                    <div className='description__subheader-two'>
                        <p>{props.video.views}</p>
                        <p>{props.video.likes}</p>
                    </div>
                </div>
            </div>
            <p className='description__text'>{props.video.description}</p>
        </section>
        {/* <CommentSection comments={props.video.comments}/> */}
    </>    
    )
}

export default ContentContainer
