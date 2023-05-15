import { Routes, Route } from 'react-router-dom';
import Layout from './pages/front/Layout';
import Home from './pages/front/Home';
import Login from './pages/front/Login';
import Profile from './pages/admin/Profile';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
