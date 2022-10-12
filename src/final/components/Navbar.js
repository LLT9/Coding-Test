import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='App'>
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            </nav>
    </div>
    
  );
};
export default Navbar;