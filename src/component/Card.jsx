import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { useAppContext } from '../context/AppContext';

const Card = ({ post, isDeleteVisible }) => {
    const { handleIsbookmarkedFlag } = useAppContext();

    const { userImage, name, caption, image, likes, isBookmarked, isLiked } = post;

    const bookmark = isBookmarked ? <BsBookmarkFill className="icons card-icon right" /> : <BsBookmark className="icons card-icon right" />;

    const like = isLiked ? <AiFillHeart className="icons card-icon left red-text" /> : <AiOutlineHeart className="icons card-icon left" />;

    const handleBookmark = (post) => {
        handleIsbookmarkedFlag(post.id, !post.isBookmarked);
    }

    return (
        <div className="card">
            <ul className='collection card-user'>
                <li className="collection-item">
                    <img src={userImage} alt="" className="card-user-photo left" />
                    <span className='card-user-name left'>{name}</span>
                    <a className='icon black-text'>
                        {isDeleteVisible && <AiOutlineDelete className="icons card-delete-icon right" />}
                    </a>
                </li>
            </ul>
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-content caption">
                <p className='left'>
                    {caption}
                </p>
            </div>
            <div className="card-action">
                <a className='icon black-text'>
                    {like}
                </a>
                <a className='icon black-text left'>
                    {likes.likeCount}
                </a>
                <a onClick={(e) => handleBookmark(post)} className='icon black-text'>
                    {bookmark}
                </a>
            </div>
        </div >
    )
}

export default Card