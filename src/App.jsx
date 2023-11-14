import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chat from './Chat.jsx';
import data from '../Coding-Test/materials/sample.json';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Whatsapp</h1>
        
        <div className="header_Right">
          <SearchIcon/>
          <MoreVertIcon/>
        </div>
      </div>

      <div className="icons">
        <div className="camera_Main">
          <div className="camera_Plus">
          </div>
          <div className="camera_Border">
            <img id="camera" src="../Coding-Test/materials/camera.png" />
          </div>
        </div>

        <div className="story">
          {data.map((images) => (
            <img id="icon" key={images.name} src={images.image} alt={images.name} />
          ))}
        </div>
      </div>

      <div className="chats">
        {data.map((item) => (
          <Chat key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
