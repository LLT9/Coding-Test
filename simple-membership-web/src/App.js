import React, { Suspense, useEffect, useState } from "react";
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
  const [userData, setUserData] = useState({ token: null });
  const [isSignIn, setSignIn] = useState(false);

  useEffect(() => {
    userData.token ? setSignIn(true) : setSignIn(false);
  }, [userData]);
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={"loading"}>
          
          <SwitchLanguage userData={userData} setUserData={setUserData} />
          <Routes>
            <Route path="/" element={<Welcome isSignIn={isSignIn} />} />
            <Route path="signin" element={<SignIn isSignIn={isSignIn} setUserData={setUserData} />} />
            <Route element={ <ProtectedRoute token={userData.token} redirectPath={"./signin"} />} >
              <Route path="userProfile" element={<UserProfile userData={userData} />} />
            </Route>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
