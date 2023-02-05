const NavItem = (props) => {
    const { children, onClick, className } = props;

    return <button className={`basic-nav-item ${className}`} onClick={onClick}>
        {children}
    </button>;
};

export default NavItem;