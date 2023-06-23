import React from 'react'
import Feed from './Feed'
import SideNav from './SideNav'
import UserBar from './UserBar'

const Home = () => {
    return (
        <div className='row'>
            <SideNav />
            <Feed />
            <UserBar />
        </div >
    )
}

export default Home