import React from 'react'

const CommentData = (props) => {

// const date = Date(props.commentData.timestamp)
// console.log(date)

//FUNCTION FOR FORMATTING DATES
// dateFormat = (dateInput) => {
//     const date = Date(props.video.timestamp)
//     console.log(date)
//     let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
//     let dateFormat = `${months[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`;
//     return dateFormat;
//   }

// const date = dateFormat(props.commentData.timestamp)

    return (
        <li className='data' key={props.commentData.id}>
            <div>
                <div className='image__item image__item--user'></div>
            </div>
            <div className='data__content'>
                <div className='data__header'>
                    <p className='data__header--name'>{props.commentData.name}</p>
                    <p className='data__header--date'>{props.commentData.timestamp}</p>
                </div>
                <p>{props.commentData.comment}</p> 
            </div>

        </li>
    )
}

export default CommentData
