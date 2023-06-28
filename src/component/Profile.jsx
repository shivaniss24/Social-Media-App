import React from 'react'
import Cards from './Cards';
import { useAppContext } from '../context/AppContext';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user } = useAuth0();
    const { isLoading, posts } = useAppContext();

    const profilePosts = posts.filter((post) => user?.email === post.email);

    return (
        <div className='col s7 feed'>

            <div className='container'>
                <div className='row'>
                    <div className='col s4'>
                        <img className='profile-pic' src={user?.picture} />
                    </div>
                    <div className='col s8'>
                        <h4 className='profile-left'>{user?.name}</h4>
                        <p className='profile-left'>{user?.email}</p>
                        <p className='profile-left grey-text'>Followers 1k &nbsp; &nbsp; &nbsp; Followed 5</p>
                    </div>
                </div>
            </div>

            <div className='divider'></div>

            <Cards posts={profilePosts} isDeleteVisible={true} />
        </div>
    )
}

export default Profile