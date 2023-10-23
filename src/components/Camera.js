import React from 'react'
import { camera } from '../photo/photo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const Camera = () => {
    return (
        <>
            <div className="position-relative shadow img-outer bg-white d-flex p-3 justify-content-center rounded-circle align-items-center border border-1 border-secondary opacity-50 flex-shrink-0">
                <div className="d-flex shadow bg-white translate-plus rounded-circle position-absolute start-100 top-100 justify-content-center align-items-center p-plus"><FontAwesomeIcon className="fs-10" icon={faPlus} /></div>
                <img src={camera} />
            </div>
        </>
    )
}


export default Camera;