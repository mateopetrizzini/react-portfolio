import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout(){

    return(
        <>
        <Navbar />

        <main style={{padding: "2rem"}}>
            <Outlet />
        </main>
        </>
    );
}

export default MainLayout;