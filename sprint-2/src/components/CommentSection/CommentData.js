import React from 'react'
import dateFormat, { timeAgo } from '../../dateFormat'

const CommentData = (props) => {
    console.log(props.commentData.timestamp)
    const date = dateFormat(props.commentData.timestamp)
    const dynamicDate = timeAgo(date)

    return (
        <li className='data' key={props.commentData.id}>
            <div>
                <div className='image__item image__item--user'></div>
            </div>
            <div className='data__content'>
                <div className='data__header'>
                    <p className='data__header--name'>{props.commentData.name}</p>
                    {/* <p className='data__header--date'>{props.commentData.timestamp}</p> */}
                    <p className='data__header--date'>{dynamicDate}</p>
                </div>
                <p>{props.commentData.comment}</p> 
            </div>

        </li>
    )
}

export default CommentData
