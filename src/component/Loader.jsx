import React from 'react'

const Loader = () => {
    return (
        <div className='container'>
            <div className="progress deep-purple lighten-3 container">
                <div className="indeterminate deep-purple accent-2"></div>
            </div>
            <div className="modal-overlay" style={{ "z-index": "1002", display: "block", opacity: "0.5" }}></div>
        </div>
    )
}

export default Loader