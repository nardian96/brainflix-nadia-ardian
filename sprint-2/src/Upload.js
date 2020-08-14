import React from 'react'
import LogoHeader from './assets/logo/Logo-brainflix.svg'
import Header from './components/Header'
import Image from './assets/images/Upload-video-preview.jpg'
import './styles/app.css';


function Upload() {
    return (
    <>        
        <div>
            < Header logo={LogoHeader} />
        </div>
        <section className='upload__section'>
            <h1>Upload Video</h1>
            <div className='upload__input'>
                <div className='thumbnail__container thumbnail__container--header'>
                    <img src={Image} alt='Thumbnail'/>
                </div>
                <form>
                    <div className='title__container title__container--header'>
                        <textarea name="comment" className="title__box" placeholder="Add a title to your video"></textarea>
                    </div>
                    <div className='description__container description__container--header'>
                        <textarea name="comment" className="description__box" placeholder="Add a description of your video"></textarea>
                    </div>
                </form>
            </div>
            <div className='upload__button-wrapper'>
                <button type ="submit" className="upload__button">PUBLISH</button>
                <p className="upload__cancel">CANCEL</p>
            </div>    
        </section>
    </>
    )
}

export default Upload
