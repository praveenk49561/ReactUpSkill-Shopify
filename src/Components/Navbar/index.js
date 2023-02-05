import NavItem from './NavItem';

const Navbar = (params) => {
    const { } = params;

    return <div className="basic-nav-bar">
        <div>Icon</div>
        <div>
            <NavItem className="">Shop</NavItem>
            <NavItem className="">Contact</NavItem>
            <NavItem className="">Signin</NavItem>
            <NavItem className="">Icon</NavItem>
        </div>
    </div>
};

export default Navbar;