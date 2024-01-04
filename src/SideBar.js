import { Header } from './component/Header';
import { ChatList } from './component/Chat';
import { Feed } from './component/Feed';

import './SideBar.css';

export const SideBar = () => {

  return (
    <div className="side-bar">

      <div className="side-bar-header">
        <Header/>
      </div>

      <div className="side-bar-feed">
        <Feed/>
      </div>

      <div className="side-bar-chatlist">
        <ChatList/>
      </div>
    </div>
  )
}