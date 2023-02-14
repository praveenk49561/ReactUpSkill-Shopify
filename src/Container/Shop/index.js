import { useContext } from "react";
import UserContext from '../../Contexts/UserContext';

const ShopPage = () => {
    const { user } = useContext(UserContext);
    return <div>
        <div>{user?.displayName}</div>
        <div>{user?.email}</div>
    </div>;
};

export default ShopPage;