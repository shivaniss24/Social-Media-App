import React, { useState } from 'react'
import * as filestack from 'filestack-js';
import { useAppContext } from '../context/AppContext';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from "uuid";
import Loader from '../component/Loader'

const CreatePostModal = ({ closeModal }) => {
    const { user } = useAuth0();
    const { createPost } = useAppContext();

    const [caption, setCaption] = useState('');
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCaption = (event) => {
        setCaption(event.target.value);
    }

    const handleFile = (event) => {
        setFile(event.target.files[0]);
    }

    const handleCreate = async () => {
        setIsLoading(true);

        const apikey = 'AhvYDa1CnQkSXnvucYEr6z';
        const client = filestack.init(apikey);

        const response = await client.upload(file);

        if (response.url) {
            createPost(user, caption, response.url, uuid());
            setIsLoading(false);
            closeModal();
        }
    }

    return (
        <div>
            <div className='modal open' style={{ "z-index": "1003", display: "block", opacity: "1", top: "10%", transform: "scaleX(1) scaleY(1)" }}>
                <div className='modal-content'>
                    <h4>Create Post</h4>
                    <div className='divider'></div>
                    <div className="row">
                        <form className="col s12 ">
                            <div className="row">
                                <div className="input-field">
                                    <input onChange={handleCaption} type="text" value={caption} />
                                    <label>Caption</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="file-field input-field">
                                    <div className="btn deep-purple accent-2">
                                        <span>File</span>
                                        <input onChange={handleFile} type="file" />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal-footer">
                    <a onClick={closeModal} className="modal-close waves-effect waves-red btn-flat">Discard</a>
                    <a onClick={handleCreate} className="modal-close waves-effect waves-green btn-flat">Create</a>
                </div>

                {isLoading && <Loader />}

            </div>
            <div className="modal-overlay" style={{ "z-index": "1002", display: "block", opacity: "0.5" }}></div>
        </div >
    )
}

export default CreatePostModal