import React from 'react'
import Cards from './Cards'
import { useAppContext } from '../context/AppContext';

const Feed = () => {
    const { isLoading, posts } = useAppContext();

    const feedPosts = posts.filter((post) => post.isFollowed);

    return (
        <div className='col s7 feed'>
            <Cards posts={feedPosts} />
        </div>
    )
}

export default Feed