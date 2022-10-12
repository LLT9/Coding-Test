import { Link, Outlet } from 'react-router-dom';
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