// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import logo from '../../public/Avion-logos/Avion-logos_transparent.png';

// interface HeaderProps {
//     modeToggle: JSX.Element;
// }

// const Header: React.FC<HeaderProps> = ({ modeToggle }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <header className="w-full mx-auto p-1 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md border rounded-lg">
//             <div className="flex items-center">
//                 <Link to="/" className=" font-bold  dark:text-white">
//                     <img src={logo} alt="Logo" className="rounded-full" style={{ width: '140px', height: '140px' }} />
//                 </Link>

//                 {/* Toggle Button for Mobile */}
//                 <div className="md:hidden">
//                     {isMenuOpen ? (
//                         <X onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
//                     ) : (
//                         <Menu onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
//                     )}
//                 </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-11  px-4 py-2 bg-blue-500  rounded-full font-semibold hover:bg-blue-600 transition duration-600">
//                 {/* Nav links here */}
//                 <Link to="/avion/all">View Flight Details</Link>
//                 <Link to="#">About Us</Link>
//             </div>

//             {/* Login and Signup Buttons */}
//             <div className="flex items-center space-x-2">
//                 {/* Login and signup buttons here */}
//                 <Link to="/login/authenticate" className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
//                     Login
//                 </Link>
//                 <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition duration-300">
//                     Signup
//                 </Link>
//                 {modeToggle}
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`absolute top-16 left-0 w-full bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 shadow-md p-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'animate-slide-down block' : 'hidden'
//                     }`}
//             >
//                 <Link to="/">View Flight Details</Link>
//                 <Link to="#">About Us</Link>
//             </div>
//         </header>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../public/Avion-logos/Avion-logos_transparent.png';

interface HeaderProps {
    modeToggle: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ modeToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="w-full mx-auto p-1 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md border rounded-lg">
                <header className="flex items-center">
                    <Link to="/" className=" font-bold dark:text-white">
                        <img src={logo} alt="Logo" className="rounded-full" style={{ width: '140px', height: '140px' }} />
                    </Link>

                    {/* Toggle Button for Mobile */}
                    <div className="md:hidden">
                        {isMenuOpen ? (
                            <X onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
                        ) : (
                            <Menu onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
                        )}
                    </div>
                </header>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-11 px-4 py-2 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition duration-600">
                    {/* Nav links here */}
                    <Link to="/avion/all">View Flight Details</Link>
                    <Link to="#">About Us</Link>
                </div>

                {/* Login and Signup Buttons */}
                <div className="flex items-center space-x-2">
                    {/* Login and signup buttons here */}
                    <Link to="/login/authenticate" className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                        Login
                    </Link>
                    <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition duration-300">
                        Signup
                    </Link>
                    {modeToggle}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-16 left-0 w-full bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 shadow-md p-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'animate-slide-down block' : 'hidden'
                        }`}
                >
                    <Link to="/">View Flight Details</Link>
                    <Link to="#">About Us</Link>
                </div>
            </div>
        </>
    );
};

export default Header;
