    const Header = () => {
    return (
        <div className="navbar md:px-16 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {" "}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    <li>
                    <a>Item 1</a>
                    </li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li>
                        <a>Submenu 1</a>
                        </li>
                        <li>
                        <a>Submenu 2</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a>Item 3</a>
                    </li>
                </ul>
                </div>
                <a href="/">
                    <img src="/Logo.svg" alt="Logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">Service</a> </li>
                    <li> <a href="#">Feature</a> </li>
                    <li> <a href="#">Product</a> </li>
                    <li> <a href="#">Testimonial</a> </li>
                    <li> <a href="#">FAQ</a> </li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a href="#" className="text-[#4CAF4F] px-4">Login</a>
                <a href="#" className="btn text-white px-4 bg-[#4CAF4F]">Sign up</a>
            </div>
        </div>
    );
    };

    export default Header;
