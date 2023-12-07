import {Outlet} from "react-router-dom";
import Navbar from "./AppNav.jsx";

const Root = () => {
    return (
        <div className="h-[calc(100%-80px)] max-w-4xl mx-auto">
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default Root;