import React from 'react'
import Card from './Card'

const Cards = ({ posts, isDeleteVisible }) => {
    const latestPosts = posts.sort((a, b) => b.latestCount - a.latestCount);
    return (
        <div>
            {latestPosts.map(post => <Card post={post} isDeleteVisible={isDeleteVisible} />)}
        </div>
    )
}

export default Cards;