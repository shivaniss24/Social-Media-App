import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { v4 as uuid } from "uuid";

const EditPostModal = ({ post, closeModal }) => {
    const { editPost } = useAppContext();

    const [caption, setCaption] = useState(post.caption);

    const handleCaption = (event) => {
        setCaption(event.target.value);
    }

    const handleEdit = (post) => {
        editPost(post.id, caption);
        closeModal();
    }

    return (
        <div>
            <div className='modal open' style={{ "z-index": "1003", display: "block", opacity: "1", top: "10%", transform: "scaleX(1) scaleY(1)" }}>
                <div className='modal-content'>
                    <h4>Edit Post</h4>
                    <div className='divider'></div>
                    <div className="row">
                        <form className="col s12 ">
                            <div className="row">
                                <div className="input-field">
                                    <input onChange={handleCaption} type="text" value={caption} />
                                    <label className='active'>Caption</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal-footer">
                    <a onClick={closeModal} className="modal-close waves-effect waves-red btn-flat">Discard</a>
                    <a onClick={e => handleEdit(post)} className="modal-close waves-effect waves-green btn-flat">Edit</a>
                </div>
            </div>
            <div className="modal-overlay" style={{ "z-index": "1002", display: "block", opacity: "0.5" }}></div>
        </div >
    )
}

export default EditPostModal