import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="flex justify-between px-3 py-2 md:px-[55px] z-[1000000] fixed top-0 left-0 right-0 bg-[#1515157f]">
            <div>
                <h1 className="text-white text-2xl font-bold">BISTRO BOSS</h1>
                <p className="text-white text-sm ">Restaurant</p>
            </div>
            <button onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden">
                {toggle ? <MdClose /> : <HiMenuAlt1 />}
            </button>
            <ul className={`flex transition-all duration-200 md:flex-row flex-col p-4 bg-[#1515157f] w-48 rounded-md md:w-auto md:bg-transparent absolute md:static right-0 text-center  md:items-center gap-4 text-white ${toggle ? "top-[100%]" : "-left-full"}`}>
                <li>
                    <NavLink onClick={() => setToggle(false)} to="/" className={({ isActive }) => isActive ? "active" : "font-bold uppercase"}>Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setToggle(false)} to="/contact-us" className={({ isActive }) => isActive ? "active" : "font-bold uppercase"}>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setToggle(false)} to="/dashboard" className={({ isActive }) => isActive ? "active" : "font-bold uppercase"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setToggle(false)} to="/our-menu" className={({ isActive }) => isActive ? "active" : "font-bold uppercase"}>Our Menu</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setToggle(false)} to="/our-shop/salad" className={({ isActive }) => isActive ? "active" : "font-bold uppercase"}>Our Shop </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setToggle(false)} to="/login" className={({ isActive }) => isActive ? "active" : "font-bold uppercase"}>Login </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;