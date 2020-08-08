import React from 'react'

const CommentData = (props) => {
    return (
        <li key={props.commentData.id}>
            <div>{props.commentData.name}</div>
            <div>{props.commentData.date}</div>
            <div>{props.commentData.content}</div> 
        </li>
    )
}

export default CommentData
