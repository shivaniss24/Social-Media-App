import React from 'react'
import Cards from './Cards';
import { useAppContext } from '../context/AppContext';

const Explore = () => {
    const { isLoading, posts } = useAppContext();

    return (
        <div className='col s7 feed'>
            <Cards posts={posts} />
        </div>
    )
}

export default Explore