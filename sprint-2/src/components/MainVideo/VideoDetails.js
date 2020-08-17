import React from 'react'
import ContentContainer from './ContentContainer'
import CommentSection from '../CommentSection/CommentSection'

const Body = (props) => {
    return (
    <section className='subcontent'>
        <ContentContainer video={props.video}/>
        <CommentSection comments={props.video.comments} />
    </section>    
    )
}

export default Body
