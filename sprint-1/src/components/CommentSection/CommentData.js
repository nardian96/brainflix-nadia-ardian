import React from 'react'

const CommentData = (props) => {
    return (
        <li className='data' key={props.commentData.id}>
            <div>
                <div className='image__item image__item--user'></div>
            </div>
            <div className='data__content'>
                <div className='data__header'>
                    <p className='data__header--name'>{props.commentData.name}</p>
                    <p className='data__header--date'>{props.commentData.date}</p>
                </div>
                <p>{props.commentData.content}</p> 
            </div>

        </li>
    )
}

export default CommentData
