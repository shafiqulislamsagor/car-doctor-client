import { Outlet } from 'react-router-dom';
import Navber from '../shared/Navber';
import Footer from '../shared/Footer';

const MainPage = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainPage;