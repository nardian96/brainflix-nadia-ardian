import React from 'react'
import ContentContainer from './ContentContainer'
import CommentSection from '../CommentSection/CommentSection'

const Body = (props) => {
    return (
    <section className='subcontent'>
        <ContentContainer video={props.video}/>
        <CommentSection id= {props.video.id} comments={props.video.comments} displayVideo={props.displayVideo} />
    </section>    
    )
}

export default Body
