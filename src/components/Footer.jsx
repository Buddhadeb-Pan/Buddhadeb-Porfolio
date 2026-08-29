import {
    BriefcaseBusiness,
    Code2,
    Mail,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <p>
                    © {new Date().getFullYear()}{" "}
                    {personalInfo.name}. Built while
                    learning.
                </p>

                <div
                    className="footer-links"
                    aria-label="Social links"
                >
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Code2 size={18} />
                    </a>

                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <BriefcaseBusiness size={18} />
                    </a>

                    <a
                        href={`mailto:${personalInfo.email}`}
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;