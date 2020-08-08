import React from 'react'
import UserPicture from '../UserPicture'
import CommentData from '../CommentSection/CommentData'

const CommentSection = (props) => {
    return (
        <div>
            <div>

            </div>
            <div>
                < UserPicture />
                <form>
                    <div className="form-message__container form-message__container--comment">
                        <textarea name="comment" className="form-message__comment" placeholder="Add a new comment"></textarea>
                    </div>
                    <button type ="submit" className="form-message__submit">COMMENT</button>
                </form>
            </div>
            <ul>
                {props.comments.map((comment) => (
                    <CommentData key={comment.id} commentData={comment} />
                ))}
                    {/* {props.comments.map((comment) => (
                    <li key={comment.id}>
                        <div>{comment.name}</div>
                        <div>{comment.date}</div>
                        <div>{comment.content}</div> 
                    </li>
                ))} */}
            </ul>
        </div>
    )
}

export default CommentSection

