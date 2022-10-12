import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navigation'>
        <nav className='navbar'>
            <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
            Login
        </NavLink>
        <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
            Welcome
        </NavLink>
        <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
            About
        </NavLink>
        
        </nav>
</div>
    
  );
};
export default Navbar;