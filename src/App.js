import React, { useEffect, useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import ContentBar from './components/ContentBar';


// export interface ApiProps {
//   name?: string,
//   image?: string,
//   message?: string,
//   unread_message?: number,
//   receive_time?: number
// }

function App() {

  const [data, setData] = useState()

  useEffect(() => {

    const callApi = async () => {
      try {
        const res = await fetch('/sample.json');
        if (res.ok && res.status === 200) {
          const result = await res.json();
          if (result.length > 0) setData(result)
        } else {
          throw new Error("call Api error")
        }
      } catch (err) {
        console.log("Error message", err)
      }
    }
    callApi();
  }, [])
  
  return (
    <div className="most-outer m-auto">
      <div className="position-sticky top-0"><TopBar /></div>
      {data?.map((item, i) => <ContentBar key={i} {...item ? { ...item } : ""} />)}
    </div>
  );
}

export default App;

