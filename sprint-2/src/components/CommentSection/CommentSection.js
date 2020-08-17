import React from 'react'
import UserPicture from '../UserPicture'
import CommentData from '../CommentSection/CommentData'
import commentCounter from '../../commentCounter'

const CommentSection = (props) => {

 
    if(!props.comments) {
        return <h1>LOADING DATA</h1>
    } else {
    let commentCount = commentCounter(props.comments)
    return (
        <section className='comment__section'>
            <p className='comment__counter'>
                {commentCount} Comments
            </p>
            <div className='comment__input'>
                <div className='extra-padding'>
                    < UserPicture />
                </div>
                <form>
                    <div className='input__container input__container--header'>
                        <textarea name="comment" className="input__box" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                    </div>
                    <button type ="submit" className="input__button">COMMENT</button>
                </form>
            </div>
            <ul className='comment__data'>
                {props.comments.map((comment) => {
                return <CommentData key={comment.id} commentData={comment} />
                })}
            </ul>
        </section>
    )}
}

export default CommentSection

