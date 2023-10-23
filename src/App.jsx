import TitleSection from './components/TitleSection';
import CircleImg from './components/CircleImg';
import ChatIndexSection from './components/ChatIndexSection';
import { FiMoreVertical } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import './App.css';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import { useState, useEffect } from 'react';


function App() {

    const data = require("./materials/sample.json");
    const [sortedData, setSortedData] = useState(null);

    useEffect(()=>{
        if (data[0]) {
            setSortedData(data.sort((a, b) => b.receive_time - a.receive_time));
        }
    }, [data])
    
    return (
        <div className="App">
            <header className="App-header">
                {/* 
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a> 
                */}
            </header>
            <TitleSection 
                title="Whatsapp"
                icon={
                    <>
                        <FiSearch />
                        <FiMoreVertical style={{marginLeft: "20px"}}/>
                    </>
                }
            />
            {
                sortedData ? 
                <>
                    <HorizontalScrollSection data={sortedData}/>
                    {
                        sortedData.map((message, index)=>(
                            <ChatIndexSection
                                key={index}
                                message={message}
                            />
                        ))
                    }
                </>
                :
                <>
                    Loading
                </>

            }            
        </div>
    );

}

export default App;
