import React from 'react';
import image from '../assets/images/Mohan-muruge.jpg';

const UserPicture = () => {
    return (
        <img className="image__item image__item--user" src={image} alt="User"/>
    )
}

export default UserPicture