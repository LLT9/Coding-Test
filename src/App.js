import './App.css';

import { useRoutes } from "react-router-dom";
import routes from "./route";

function App() {
  const routing = useRoutes(routes); 
  return (
    <div>
      {routing}
    </div>
  );
}

export default App;
