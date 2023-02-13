import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import HomePage from '../HomePage';


const Dashboard = () => {

    return <div>
        <Navbar />
        <Outlet />
    </div>
};

export default Dashboard;