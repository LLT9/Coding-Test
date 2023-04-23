// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "./Component/Layout"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import NoPage from "./pages/NoPage"
import './App.css';

export const theme = extendTheme({
  breakpoints: {
    none: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
})

function App() {

  return (
    <Suspense fallback="...is loading">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="welcome" element={<Welcome />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Suspense>
  );
}

export default App;
