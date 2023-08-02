import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { BiTrendingUp } from "react-icons/bi"
import { useAppContext } from '../context/AppContext';
import EditPostModal from './EditPostModal';

const Card = ({ post, isDeleteVisible }) => {
    const { handleIsbookmarkedFlag, handleIsLikedFlag, deletePost } = useAppContext();

    const { userImage, name, caption, image, likes, isBookmarked, isLiked, isTrending } = post;

    const bookmark = isBookmarked ? <BsBookmarkFill className="icons card-icon right" /> : <BsBookmark className="icons card-icon right" />;

    const like = isLiked ? <AiFillHeart className="icons card-icon left red-text" /> : <AiOutlineHeart className="icons card-icon left" />;

    const trending = isTrending ? <BiTrendingUp className="icons card-icon left deep-purple-text accent-2" /> : null;

    const handleBookmark = (post) => {
        handleIsbookmarkedFlag(post.id, !post.isBookmarked);
    }

    const handleLike = (post) => {
        const likeCount = post.isLiked ? post.likes.likeCount - 1 : post.likes.likeCount + 1
        handleIsLikedFlag(post.id, !post.isLiked, likeCount);
    }

    const handleDelete = (post) => {
        deletePost(post.id);
    }

    const [editPostVisibility, setEditPostVisibility] = useState(false);

    const showModal = () => {
        setEditPostVisibility(true);
    }

    const closeModal = () => {
        setEditPostVisibility(false);
    }

    return (
        <div className="card">
            <ul className='collection card-user'>
                <li key={post.id} className="collection-item">
                    <img src={userImage} alt="" className="card-user-photo left" />
                    <span className='card-user-name left'>{name}</span>
                    <a onClick={(e) => handleDelete(post)} className='icon black-text'>
                        {isDeleteVisible && <AiOutlineDelete className="icons card-delete-icon right" />}
                    </a>
                    <a onClick={showModal} className='icon black-text'>
                        {isDeleteVisible && <AiOutlineEdit className="icons card-delete-icon right" />}
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
                <a onClick={(e) => handleLike(post)} className='icon black-text'>
                    {like}
                </a>
                <a className='icon black-text left'>
                    {likes.likeCount}
                </a>
                <a className='icon black-text left'>
                    {trending}
                </a>
                <a onClick={(e) => handleBookmark(post)} className='icon black-text'>
                    {bookmark}
                </a>
            </div>
            {editPostVisibility && <EditPostModal closeModal={closeModal} post={post} />}
        </div >
    )
}

export default Card