import React from 'react'
import UploadIcon from '../assets/icons/SVG/Icon-upload.svg'

function Button(props) {
    return (
    <form className="button__container">
        <label htmlFor="button__item" className="button__item-icon">
            <img src={UploadIcon}/>
        </label>
        <input className="button__item" type="button" value={props.value}></input>
    </form>
    )
}

export default Button;
