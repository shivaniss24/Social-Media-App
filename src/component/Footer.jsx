import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='page-footer deep-purple accent-2 footer-bottom'>
            <div className="row">
                <span className='follow-us'>
                    © 2023 Connect |
                    Follow
                    <a className='icon'
                        href="https://twitter.com/Shivanisoni24"
                        target="_blank">
                        <FaTwitter className="icons" />
                    </a>
                    <a className='icon'
                        href="https://www.instagram.com/shivanisonii__/"
                        target="_blank">
                        <FaInstagram className="icons" />
                    </a>
                    <a className='icon'
                        href="https://discord.com/channels/@me/1003199813707374663"
                        target="_blank">
                        <FaDiscord className="icons" />
                    </a>
                </span>
            </div>
        </footer >
    )
}

export default Footer