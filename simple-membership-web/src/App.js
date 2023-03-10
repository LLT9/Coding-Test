import React, { Suspense, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";

import "./i18n";

//page
import Welcome from "./page/welcome/welcome";
import SignIn from "./page/signIn/signIn";
import UserProfile from "./page/userProfile/userProfile";

//components
import SwitchLanguage from "./components/switchLanguage/switchLanguage";

//protect private route
const ProtectedRoute = ({ token, redirectPath }) => {
  return token ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
function App() {
  const [userData, setUserData] = useState({token: null});

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={"loading"}>
          <SwitchLanguage userData={userData} setUserData={setUserData}  />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="signin" element={<SignIn userData={userData} setUserData={setUserData} />} />
            <Route element={<ProtectedRoute token={userData.token} redirectPath={"./signin"}  />}>
              <Route path="userProfile" element={<UserProfile userData={userData} />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
