import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationLinks, personalInfo } from "../data/portfolioData";
import ContactModal from "./ContactModal";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const location = useLocation();

    const closeContact = useCallback(() => {
        setContactOpen(false);
    }, []);

    const openContact = useCallback(() => {
    setMenuOpen(false);
    setContactOpen(true);
}, []);
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("nav-open", menuOpen);
        return () => document.body.classList.remove("nav-open");
    }, [menuOpen]);

    useEffect(() => {
    const handleContactRequest = () => {
        openContact();
    };

    window.addEventListener(
        "portfolio:open-contact",
        handleContactRequest
    );

    return () => {
        window.removeEventListener(
            "portfolio:open-contact",
            handleContactRequest
        );
    };
}, [openContact]);

    return (
        <>
            <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
                <div className="nav-shell">
                    <Link className="brand" to="/" aria-label="Buddhadeb Pan home">
                        <span className="brand-mark" aria-hidden="true">
                            {personalInfo.initials}
                        </span>

                        <span className="brand-copy">
                            <strong>{personalInfo.name}</strong>
                            <small>
                                {personalInfo.navSubtitle ??
                                    "Final-Year CSE Student • Aspiring Software Developer"}
                            </small>
                        </span>
                    </Link>

                    <button
                        className="nav-toggle"
                        type="button"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((current) => !current)}
                    >
                        {menuOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>

                    <div className={`nav-panel ${menuOpen ? "is-open" : ""}`}>
                        <nav aria-label="Primary navigation">
                            <ul className="nav-links">
                                {navigationLinks.map((link) => (
                                    <li key={link.path}>
                                        <NavLink
                                            className={({ isActive }) =>
                                                `nav-link ${isActive ? "is-active" : ""}`
                                            }
                                            to={link.path}
                                            end={link.path === "/"}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button
                            className="nav-cta"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded={contactOpen}
                            onClick={openContact}
                        >
                            Let&apos;s Talk
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </header>

            <ContactModal isOpen={contactOpen} onClose={closeContact} />
        </>
    );
}

export default Navbar;
