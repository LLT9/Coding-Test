import React from 'react'
import SectionOne from './SectionOne';
import Camera from './Camera';
import HeadPicture from './HeadPicture';
import { pic } from '../photo/photo';







const TopBar = () => {

  const Arr = Array(Math.floor(Math.random() * 10) + 1).fill(null)
  return (
    <>
      <SectionOne />
      <div className="d-flex overflow-x-auto justify-content-start align-items-center py-2 px-3 border border-0 border-bottom border-secondary shadow-sm border-opacity-25">
        <Camera />
        {Arr.map((_, index) => <HeadPicture type="topBar" key={index} className="gradient-border shadow ms-2" src={pic} />)}
      </div>
    </>
  )
}



export default TopBar;