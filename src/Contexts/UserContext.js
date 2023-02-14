import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext({
    user: null,
    setUser: () => null
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { Provider } = UserContext;
    const value = { user, setUser };

    return <Provider value={value}>{children}</Provider>    
};

export default UserContext