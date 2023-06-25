import React from 'react'
import { useAppContext } from '../context/AppContext';
import Cards from './Cards';

const Bookmark = () => {
    const { isLoading, posts } = useAppContext();

    const bookmarkPosts = posts.filter((post) => post.isBookmarked);

    return (
        <div className='col s7 feed'>
            <Cards posts={bookmarkPosts} />
        </div>
    )
}

export default Bookmark