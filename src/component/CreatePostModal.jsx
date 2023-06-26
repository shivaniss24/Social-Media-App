import React from 'react'

const CreatePostModal = ({ closeModal }) => {
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
                                    <input type="text" />
                                    <label>Caption</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="file-field input-field">
                                    <div className="btn deep-purple accent-2">
                                        <span>File</span>
                                        <input type="file" />
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
                    <a className="modal-close waves-effect waves-green btn-flat">Create</a>
                </div>

            </div>
            <div className="modal-overlay" style={{ "z-index": "1002", display: "block", opacity: "0.5" }}></div>
        </div >
    )
}

export default CreatePostModal