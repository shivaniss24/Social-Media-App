import React from 'react'
import { FaBookmark, FaHome, FaSearch, FaUser } from "react-icons/fa";

const UserBar = () => {
    return (
        <div className='col s3'>
            <div className='container-user'>
                <div className='container'>
                    <div className="search">
                        <div className="search-wrapper">
                            <input key='search' placeholder="Search" />
                        </div>
                    </div>
                </div>
                <ul className='collection'>
                    <li className="collection-item">
                        <img src="https://via.placeholder.com/1080x1080/eee?text=1:1" alt="" className="user-photo left" />
                        <span className='user-name left'>name.... name</span>
                        <a className="waves-effect waves-light btn follow-btn right deep-purple accent-2">Follow</a>
                    </li>
                </ul>
            </div >
        </div>
    )
}

export default UserBar