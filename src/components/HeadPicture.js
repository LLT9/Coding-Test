import React from 'react';

// interface Props{
//     className:string,
//     src:string,
//     type:string,
// }


const HeadPicture = ({className,src,type}) => {
    
    let value = <></>
    const contentBar = <div style={{backgroundImage:`url('${src}')`}} className={["img-head-outer rounded-circle",className].join(" ")}></div>
    const topBar =  <div className={["img-head-outer rounded-circle",className].join(" ")}><img src={src} /></div>

    if (type === "topBar"){
        value = topBar
    } else if(type === "contentBar") {
        value = contentBar
    }

    return value       
}


export default HeadPicture;