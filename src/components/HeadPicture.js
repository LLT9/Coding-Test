import React from 'react';

// interface Props{
//     className:string,
//     src:string
// }


const HeadPicture = ({className,src}) => {
    return(
        <div className={["img-head-outer rounded-circle",className].join(" ")}>
            <img src={src} />
        </div>
    )
}


export default HeadPicture;