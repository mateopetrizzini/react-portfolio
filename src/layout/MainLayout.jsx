import Navbar from "../components/Navbar";
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Outlet } from "react-router-dom";
import './MainLayout.css';

function MainLayout(){

    return(
        <div className="layout">
        <ScrollToTop />

        <Navbar />

        <main className="main-content">
            <Outlet />
        </main>

        <Footer />

        </div>
    );
}

export default MainLayout;