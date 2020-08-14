import React from 'react'
import UploadIcon from '../assets/icons/SVG/Icon-upload.svg'
import { Link } from 'react-router-dom'
function Button(props) {
    return (
    <form className="button__container">
        <label htmlFor="button__item" className="button__item-icon">
            <img src={UploadIcon} alt='Upload Icon'/>
        </label>
        <Link to="/upload"><input className="button__item" type="button" value={props.value}></input></Link>
    </form>
    )
}

export default Button;
