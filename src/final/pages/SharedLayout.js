import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';
import ReactNavBar from '../components/ReactNavBar'
const Home = () => {
  return (
    <>
      <ReactNavBar />
      <Outlet />
    </>
  );
};
export default Home;