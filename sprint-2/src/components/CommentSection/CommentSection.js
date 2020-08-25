import React, { Component } from 'react'
import UserPicture from '../UserPicture'
import CommentData from '../CommentSection/CommentData'
import commentCounter from '../../commentCounter'
import Axios from 'axios'

//FUNCTION TO APPEND API KEY TO URL REQUEST
const appendKey = (url) => {
    let apiURL = `${url}?api_key=${apiKey}`
    return apiURL
  }
  
// const apiKey = '96b4adfb-61bb-4bf3-a395-5056c79948fc';
const apiKey = '3d34d4d2-1d32-478d-b8c0-a08fc378cc67'

class CommentSection extends Component {

    state = {
        comments: ''
    }
 
    changeHandler = (event) => {
        this.setState( {
            comments: event.target.value
        })

    }


    postNewComments = (event, messageValue) => {
        event.preventDefault()
        const id = this.props.id
        if (id !== undefined) {
          // const messageValue = this.state.mainVideo.comment.value;
          if (messageValue !== "") {
            const apiComments = appendKey(`https://project-2-api.herokuapp.com/videos/${id}/comments`)
            Axios.post(apiComments, {
              name: 'Mohan Murunge',
              comment: messageValue
            })
            .then((response) => {
              this.form.reset();
              this.props.displayVideo(id)
            //   console.log(event)
            })
          }
        };
      }

    render() {
        if(!this.props.comments) {
            return <h1>LOADING DATA</h1>
        } else {
        let commentCount = commentCounter(this.props.comments)
        return (
            <section className='comment__section'>
                <p className='comment__counter'>
                    {commentCount} Comments
                </p>
                <div className='comment__input'>
                    <div className='extra-padding'>
                        < UserPicture />
                    </div>
                    <form ref={form => this.form = form} onSubmit={(event) => {this.postNewComments(event, this.state.comments)}}>
                        <div className='input__container input__container--header'>
                            <textarea onChange={this.changeHandler} name="comment" className="input__box" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                        </div>
                        <button type ="submit" className="input__button">COMMENT</button>
                    </form>
                </div>
                <ul className='comment__data'>
                    {this.props.comments.map((comment) => {
                    return <CommentData key={comment.id} commentData={comment} />
                    })}
                </ul>
            </section>
        )}
    }
}

export default CommentSection

