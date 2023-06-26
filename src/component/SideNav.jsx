import React, { useState } from 'react'
import { FaBookmark, FaHome, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CreatePostModal from './CreatePostModal';

const SideNav = () => {

    const [createPostVisibility, setCreatePostVisibility] = useState(false);

    const showModal = () => {
        setCreatePostVisibility(true);
    }

    const closeModal = () => {
        setCreatePostVisibility(false);
    }

    return (
        <div className='col s2'>
            < ul className='sidenav sidenav-fixed sidenav-align' >
                <NavLink to="/profile">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaUser className="icons" />
                        </a>
                        <b className='right'>Profile</b></a>
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaHome className="icons" />
                        </a>
                        <b className='right'>Feed</b></a>
                    </li>
                </NavLink>
                <NavLink to="/explore">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaSearch className="icons" />
                        </a>
                        <b className='right'>Explore</b></a>
                    </li>
                </NavLink>
                <NavLink to="/bookmark">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaBookmark className="icons" />
                        </a>
                        <b className='right'>Bookmark</b></a>
                    </li>
                </NavLink>

                <li className='text-black'>
                    <a onClick={showModal} className='btn-floating btn-large waves-effect waves-light deep-purple accent-2 right'>
                        <FaPlus className="create-post-icon" />
                    </a>
                    <b className='right create-post'>Create Post</b>
                </li>
            </ul >

            <div>
                {createPostVisibility && <CreatePostModal closeModal={closeModal} />}
            </div>

        </div >
    )
}

export default SideNav