import React from 'react'
import HeadPicture from './HeadPicture';
import dayjs from 'dayjs';




const ContentBar = ({ name, image, message, unread_message, receive_time }) => {

    return (
        <div className="d-flex align-items-center justify-content-between my-2 px-3">
            <HeadPicture className="img-head-outer-smaller w-20" src={image || ""} />
            <div className="d-flex align-items-start justify-content-between w-80">
                <div className="d-flex flex-column">
                    <span className="text-secondary">{name}</span>
                    <span className="fs-7 hidden-text">{message}</span>
                </div>
                <div className="d-flex flex-column align-items-end">
                <div className='fs-7 lh-lg'>{dayjs(receive_time).format('HH:mm')}</div>
                {unread_message && unread_message > 0 ? <span className="bg-success call-alert fs-10 text-white rounded-circle d-flex justify-content-center align-items-center">{((unread_message) && (unread_message > 0)) ? unread_message : ""}</span> : <></>}
               </div>
            </div>
        </div>
    )
}

export default ContentBar;