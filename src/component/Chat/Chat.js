import { ProfilePicture } from "../ProfilePicture";
import { ContactBody } from "./ContactBody";

import apiResponse from '../../materials/sample.json';

import './Chat.css';

const Chat = ({ data }) => {
  return (
    <div className="container">
      <ProfilePicture imgUrl={data.image}/>
      <ContactBody {...data}/>
    </div>
  )
}

export const ChatList = () => {
  const sortedResponse = apiResponse.sort((a, b) => b.receive_time - a.receive_time)

  return (
    <div>
      {sortedResponse.map(d => {
        return <Chat data={d}/>
      })}
    </div>
  )
}
