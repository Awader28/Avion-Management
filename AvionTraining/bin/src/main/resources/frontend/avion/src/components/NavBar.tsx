import { useState } from 'react';
import '../App.css'; // Make sure to have this CSS file in your project
import logo from '../../public/Avion-logos/Avion-logos_transparent.png';


interface NavBarProps {
    modeToggle: React.ReactNode; // or a more specific type if applicable
}

const NavBar: React.FC<NavBarProps> = ({ modeToggle }) => {

    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <div>


            <nav className={`nav ${isActive ? 'affix' : ''}`}>
                <div className="w-full">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="Logo" className="rounded-full" style={{ width: '140px', height: '140px' }} />
                        </a>
                    </div>
                    <div id="mainListDiv" className={`main_list ${isActive ? 'show_list' : ''}`}>
                        <ul className="navlinks">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Flight Details </a></li>
                            <li><a href="#">About Us</a></li>
                            {modeToggle}
                        </ul>
                    </div>
                    <span className={`navTrigger ${isActive ? 'active' : ''}`} onClick={toggleNav}>
                        <i></i>
                        <i></i>
                        <i></i>
                        
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
