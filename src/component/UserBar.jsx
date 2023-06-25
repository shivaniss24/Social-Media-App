import React, { useState } from 'react'
import { FaBookmark, FaHome, FaSearch, FaUser } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';

const UserBar = () => {

    const { users, updateisFollowedFlag } = useAppContext();

    const [searchedUsers, setSearchedUsers] = useState(users);
    const [input, setInput] = useState('');

    const searchUser = (event) => {
        const search = event.target.value;
        const result = users.filter((user) => {
            if (search === "") {
                return users;
            }
            return user.username.includes(search)
        });
        setSearchedUsers(result);
        setInput(search);
    }

    const handleFollow = (user) => {
        updateisFollowedFlag(user.id, !user.isFollowed, user.email);
    }

    return (
        <div className='col s3'>
            <div className='container-user'>
                <div className='container'>
                    <div className="search">
                        <div className="search-wrapper">
                            <input onChange={searchUser} key='search' placeholder="Search" value={input} />
                        </div>
                    </div>
                </div>
                <ul>
                    {
                        searchedUsers.map((user) => {
                            return (
                                <li className="collection">
                                    <div className='collection-item'>
                                        <img src={user.userImage} alt="" className="user-photo left" />
                                        <span className='user-name left'>{user.username}</span>
                                        <a onClick={(e) => handleFollow(user)} className="waves-effect waves-light btn follow-btn right deep-purple accent-2">
                                            {user.isFollowed ? "unfollow" : "follow"}
                                        </a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        </div>
    )
}

export default UserBar