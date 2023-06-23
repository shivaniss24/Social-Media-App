import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

const Card = () => {
    return (
        <div className="card">
            <ul className='collection card-user'>
                <li className="collection-item">
                    <img src="https://via.placeholder.com/1080x1080/eee?text=1:1" alt="" className="card-user-photo left" />
                    <span className='card-user-name left'>user id</span>
                    <a className='icon black-text'>
                        <AiOutlineDelete className="icons card-delete-icon right" />
                    </a>
                </li>
            </ul>
            <div className="card-image">
                <img src="https://c4.wallpaperflare.com/wallpaper/990/382/349/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg" />
            </div>
            <div className="card-content caption">
                <p className='left'>
                    caption
                </p>
            </div>
            <div className="card-action">
                <a className='icon black-text'>
                    <AiOutlineHeart className="icons card-icon left" />
                </a>
                <a className='icon black-text left'>
                    0
                </a>
                <a className='icon black-text'>
                    <BsBookmark className="icons card-icon right" />
                </a>
            </div>
        </div >
    )
}

export default Card