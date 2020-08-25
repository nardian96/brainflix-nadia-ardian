import React, { Component } from 'react'
import Image from './assets/images/Upload-video-preview.jpg'
import Axios from 'axios'
import './styles/app.css';


class Upload extends Component {

    state = {
        title: '',
        description: ''
    }

    eventHandler = (event) => {
        if(event.target.name === 'title') { 
            this.setState({title: event.target.value}) 
        } 
        if (event.target.name === 'description') {
            this.setState({description: event.target.value}) 
        }
    }




    postNewVideo = (event, titleValue, descriptionValue) => {
        event.preventDefault()
        if (titleValue !== '' || descriptionValue !== '') {
            Axios.post('http://localhost:8080/videos', {
                title: titleValue,
                description: descriptionValue
            })
            .then((response) => {
                console.log(response)
                this.form.reset();
            })
        }
    }


    render() {
        return (
            <>        
                <section className='upload__section'>
                    <h1>Upload Video</h1>
                    <div className='upload__input'>
                        <div className='thumbnail__container thumbnail__container--header'>
                            <img src={Image} alt='Thumbnail'/>
                        </div>
                        <form ref={form => this.form = form} onSubmit={(event) => {this.postNewVideo(event, this.state.title, this.state.description)} }>
                            <div className='title__container title__container--header'>
                                <textarea onChange={this.eventHandler} name="title" className="title__box" placeholder="Add a title to your video"></textarea>
                            </div>
                            <div className='description__container description__container--header'>
                                <textarea onChange={this.eventHandler} name="description" className="description__box" placeholder="Add a description of your video"></textarea>
                            </div>
                            <div className='upload__button-wrapper'>
                                <button type ="submit" className="upload__button">PUBLISH</button>
                                <p className="upload__cancel">CANCEL</p>
                            </div>   
                        </form>
                    </div>
                </section>
            </>
        )
    } 
}

export default Upload
