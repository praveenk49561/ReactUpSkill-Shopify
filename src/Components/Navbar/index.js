import { useRef } from 'react';
import NavItem from './NavItem';
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/Images/Logo.svg'

const Navbar = (params) => {
    const { } = params;
    const navigate = useNavigate();
    const timeoutId = useRef('');

    const onLogoClick = () => {
        navigate('');
    }

    return <div className="basic-nav-bar">
        <div className='basic-logo' onClick={onLogoClick}><Logo /></div>
        <div>
            <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-item nav-item-active' : 'nav-item'}>Shop</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item nav-item-active' : 'nav-item'}>Contact</NavLink>
            <NavLink to="/signin" className={({ isActive }) => isActive ? 'nav-item nav-item-active' : 'nav-item'}>Signin</NavLink>
        </div>
    </div>;
};

export default Navbar;