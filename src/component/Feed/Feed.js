import { ProfilePicture } from "../ProfilePicture";

import './Feed.css'

import data from "../../materials/sample.json";
import CameraImg from "../../materials/camera.png"

const CameraButton = () => {
  const showCamera = (e) => {
    e && e.preventDefault();
    // intentionally do nothing
  }

  return (
    <button onClick={showCamera}>
      <img className="camera-img" src={CameraImg} alt="CameraImg"/>
    </button>
  )
}

const FeedButton = (props) => {
  const { imgUrl } = props;

  const showFeed = (e) => {
    e && e.preventDefault();
    // intentionally do nothing
  }

  return (
    <button onClick={showFeed}>
      <ProfilePicture imgUrl={imgUrl}/>
    </button>
  )
}

export const Feed = () => {
  const sampleData = data.slice(0, 5);

  return (
    <div className="feed">
      <CameraButton/>
      {sampleData.map(data => {
        return <FeedButton imgUrl={data.image}/>
      })}
    </div>
  )
}