import {useState} from "react";

const Header= () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-logo">HARSHA DILAN</div>

                <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                </button>

                <div className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skill</a>
                    <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Project</a>
                    <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
