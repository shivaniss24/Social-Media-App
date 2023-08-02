import React, { useState } from 'react'
import Card from './Card'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'

const Cards = ({ posts, isDeleteVisible, isSortDisable }) => {

    const [isTrendingSort, setIsTrendingSort] = useState(false);

    const displayPosts = isTrendingSort ?
        posts.sort((a, b) => (a.isTrending === b.isTrending) ? 0 : a.isTrending ? -1 : 1).map(post => <Card post={post} isDeleteVisible={isDeleteVisible} />)
        : posts.sort((a, b) => b.latestCount - a.latestCount).map(post => <Card post={post} isDeleteVisible={isDeleteVisible} />);

    return (
        <div>
            {!isSortDisable && <div className='fixed-div'>
                <b className='grey-text'>Sort By</b>
                <span onClick={e => setIsTrendingSort(true)} title="Trending" className='deep-purple-text accent-2 sort-icon'><BiTrendingUp /></span>
                <span onClick={e => setIsTrendingSort(false)} title="Last Updated" className='deep-purple-text accent-2 sort-icon'><AiOutlineFieldTime /></span>
            </div>}
            {displayPosts}
        </div >
    )
}

export default Cards;