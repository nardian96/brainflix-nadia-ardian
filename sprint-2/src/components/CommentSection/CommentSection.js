import React from 'react'
import UserPicture from '../UserPicture'
import CommentData from '../CommentSection/CommentData'

const CommentSection = (props) => {
    return (
        <section className='comment__section'>
            <p className='comment__counter'>
                3 Comments
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
            {/* <ul className='comment__data'>
                {props.comments.map((comment) => (
                    <CommentData key={comment.id} commentData={comment} />
                ))}
            </ul> */}
        </section>
    )
}

export default CommentSection

