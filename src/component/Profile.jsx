import React, { useState } from 'react'
import Cards from './Cards';
import { useAppContext } from '../context/AppContext';
import { useAuth0 } from '@auth0/auth0-react';
import { AiFillSave, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai'

const Profile = () => {
    const { user } = useAuth0();
    const { isLoading, posts } = useAppContext();

    const [disableEditWebsite, setDisableEditWebsite] = useState(true);
    const [disableEditBio, setDisableEditBio] = useState(true);
    const [website, setWebsite] = useState('Add Website URL');
    const [bio, setBio] = useState('Add about yourself');

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
                    <div>
                        <p className='profile-left grey-text'>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={e => setWebsite(e.target.value)} disabled={disableEditWebsite} value={website} type="text" />
                                    <label className="active">
                                        Website {
                                            disableEditWebsite ? <a onClick={e => setDisableEditWebsite(false)} className='deep-purple accent-2 btn-floating btn-small waves-effect waves-light'>
                                                <AiOutlineEdit />
                                            </a> :
                                                <a onClick={e => setDisableEditWebsite(true)} className='deep-purple accent-2 btn-floating btn-small waves-effect waves-light'>
                                                    <AiFillSave />
                                                </a>
                                        }
                                    </label>
                                </div>
                            </div>
                        </p>
                        <p className='profile-left grey-text'>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea onChange={e => setBio(e.target.value)} disabled={disableEditBio} value={bio} type="text" className="materialize-textarea" />
                                    <label className="active">
                                        Bio {
                                            disableEditBio ? <button onClick={e => setDisableEditBio(false)} className='deep-purple accent-2 btn-floating btn-small waves-effect waves-light'>
                                                <AiOutlineEdit />
                                            </button> :
                                                <button onClick={e => setDisableEditBio(true)} className='deep-purple accent-2 btn-floating btn-small waves-effect waves-light'>
                                                    <AiFillSave />
                                                </button>
                                        }
                                    </label>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

            <div className='divider'></div>

            <Cards posts={profilePosts} isDeleteVisible={true} isSortDisable={true} />
        </div>
    )
}

export default Profile