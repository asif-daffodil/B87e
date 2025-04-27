import { Outlet } from "react-router";
import Navbar from "../components/navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>Footer content here</footer>
        </div>
    );
};

export default Layout;