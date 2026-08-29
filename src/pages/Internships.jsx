import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowRight,
    Award,
    BrainCircuit,
    BriefcaseBusiness,
    Check,
    Clock3,
    Cloud,
    Code2,
    Cpu,
    ExternalLink,
    FileText,
    Layers3,
    Mail,
    Radio,
    Sparkles,
    X,
} from "lucide-react";
import {
    internshipExperiences,
    personalInfo,
} from "../data/portfolioData";
import "../styles/internships.css";

const experienceIcons = {
    ibm: Cloud,
    future: Layers3,
    codealpha: Code2,
    agnirath: Cpu,
};

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

function IBMVisual() {
    return (
        <div className="internship-demo ibm-demo" aria-label="IBM SkillsBuild technology visual">
            <div className="ibm-orbit ibm-orbit-one" />
            <div className="ibm-orbit ibm-orbit-two" />

            <div className="ibm-core">
                <Cloud size={27} />
                <strong>IBM</strong>
                
            </div>

            <span className="ibm-node ibm-node-ai">
                <BrainCircuit size={16} />
                Full-Stack
            </span>
            <span className="ibm-node ibm-node-ml">ML</span>
            <span className="ibm-node ibm-node-cloud">
                <Cloud size={15} />
                Web Development
            </span>

            <div className="ibm-demo-label">
                <span>04 weeks</span>
                <small>Virtual learning programme</small>
            </div>
        </div>
    );
}

function FutureInternsVisual() {
    return (
        <div className="internship-demo future-demo" aria-label="Future Interns full-stack workflow visual">
            <div className="future-demo-header">
                <span>
                    <Layers3 size={17} />
                    Full-stack workflow
                </span>
                <small>Completed</small>
            </div>

            <div className="future-stack">
                <div className="future-stack-layer is-frontend">
                    <span>01</span>
                    <div>
                        <strong>Frontend tasks</strong>
                        <small>Interface and web experience</small>
                    </div>
                    <Check size={16} />
                </div>
                <div className="future-stack-layer is-development">
                    <span>02</span>
                    <div>
                        <strong>Development delivery</strong>
                        <small>Assigned project work</small>
                    </div>
                    <Check size={16} />
                </div>
                <div className="future-stack-layer is-documentation">
                    <span>03</span>
                    <div>
                        <strong>Documentation</strong>
                        <small>Final submission workflow</small>
                    </div>
                    <Check size={16} />
                </div>
            </div>

            <div className="future-credential">
                <Award size={17} />
                <span>Certificate + LOR awarded</span>
            </div>
        </div>
    );
}

function CodeAlphaVisual() {
    return (
        <div className="internship-demo codealpha-demo" aria-label="CodeAlpha frontend task visual">
            <div className="codealpha-window-bar">
                <div aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
                <small>frontend.tasks</small>
                <strong>CA</strong>
            </div>

            <div className="codealpha-task-list">
                <div>
                    <span className="codealpha-task-check">
                        <Check size={13} />
                    </span>
                    <p>
                        <strong>Build</strong>
                        <small>Frontend development tasks</small>
                    </p>
                </div>
                <div>
                    <span className="codealpha-task-check">
                        <Check size={13} />
                    </span>
                    <p>
                        <strong>Version</strong>
                        <small>GitHub repository workflow</small>
                    </p>
                </div>
                <div>
                    <span className="codealpha-task-check">
                        <Check size={13} />
                    </span>
                    <p>
                        <strong>Publish</strong>
                        <small>GitHub Pages delivery</small>
                    </p>
                </div>
            </div>

            <div className="codealpha-deploy-status">
                <span className="deploy-pulse" />
                Deployment complete
                <Award size={16} />
            </div>
        </div>
    );
}

function AgnirathVisual() {
    return (
        <div
            className="internship-demo agnirath-demo"
            aria-label="Agnirath Rover Drone system visual"
        >
            <div className="agnirath-demo-header">
                <span>
                    <Cpu size={17} />
                    Mobility system
                </span>
                <small>Rover Drone</small>
            </div>

            <div className="agnirath-system">
                <span className="agnirath-signal signal-one" />
                <span className="agnirath-signal signal-two" />
                <span className="agnirath-signal signal-three" />

                <div className="agnirath-drone" aria-hidden="true">
                    <i className="drone-arm arm-one" />
                    <i className="drone-arm arm-two" />
                    <span className="drone-rotor rotor-one" />
                    <span className="drone-rotor rotor-two" />
                    <span className="drone-rotor rotor-three" />
                    <span className="drone-rotor rotor-four" />

                    <div className="drone-core">
                        <Cpu size={22} />
                    </div>
                </div>

                <div className="agnirath-connection" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="agnirath-rover">
                    <div className="rover-body">
                        <Radio size={18} />
                        <strong>ROVER</strong>
                        <small>01</small>
                    </div>
                    <span className="rover-wheel wheel-one" />
                    <span className="rover-wheel wheel-two" />
                </div>
            </div>

            <div className="agnirath-system-tags">
                <span>Ground mobility</span>
                <span>Aerial system</span>
                <span>Real-time control</span>
            </div>
        </div>
    );
}

function InternshipVisual({ type }) {
    if (type === "ibm") return <IBMVisual />;
    if (type === "future") return <FutureInternsVisual />;
    if (type === "agnirath") return <AgnirathVisual />;
    return <CodeAlphaVisual />;
}

function CertificateViewer({ certificate, onClose }) {
    const [documentState, setDocumentState] = useState("checking");

    useEffect(() => {
        if (!certificate) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.body.classList.add("certificate-viewer-open");
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.classList.remove("certificate-viewer-open");
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [certificate, onClose]);

    useEffect(() => {
        if (!certificate) {
            setDocumentState("checking");
            return undefined;
        }

        let isCurrent = true;
        setDocumentState("checking");

        fetch(certificate.url, { method: "HEAD" })
            .then((response) => {
                const contentType = response.headers.get("content-type") ?? "";
                const isDocument =
                    contentType.includes("application/pdf") ||
                    contentType.startsWith("image/");

                if (isCurrent) {
                    setDocumentState(response.ok && isDocument ? "ready" : "missing");
                }
            })
            .catch(() => {
                if (isCurrent) setDocumentState("missing");
            });

        return () => {
            isCurrent = false;
        };
    }, [certificate]);

    if (!certificate || typeof document === "undefined") return null;

    return createPortal(
        <div
            className="certificate-viewer-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="certificate-viewer"
                role="dialog"
                aria-modal="true"
                aria-labelledby="certificate-viewer-title"
            >
                <header className="certificate-viewer-header">
                    <span className="certificate-viewer-icon">
                        <Award size={21} />
                    </span>

                    <div>
                        <small>Verified experience document</small>
                        <h2 id="certificate-viewer-title">{certificate.company}</h2>
                    </div>

                    {documentState === "ready" && (
                        <a
                            href={certificate.url}
                            target="_blank"
                            rel="noreferrer"
                            className="certificate-open-original"
                        >
                            Open full size
                            <ExternalLink size={16} />
                        </a>
                    )}

                    <button
                        type="button"
                        className="certificate-viewer-close"
                        aria-label="Close certificate viewer"
                        onClick={onClose}
                    >
                        <X size={20} />
                    </button>
                </header>

                <div className="certificate-document-shell">
                    <div className="certificate-document-label">
                        <FileText size={15} />
                        Internship certificate
                    </div>

                    {documentState === "checking" && (
                        <div className="certificate-document-state is-checking">
                            <span className="certificate-check-loader" />
                            <strong>Checking certificate preview</strong>
                            <p>Please wait a moment.</p>
                        </div>
                    )}

                    {documentState === "missing" && (
                        <div className="certificate-document-state is-missing">
                            <span>
                                <FileText size={33} />
                            </span>
                            <strong>Certificate preview coming soon</strong>
                            <p>The verified document will be available here shortly.</p>
                        </div>
                    )}

                    {documentState === "ready" && (
                        <iframe
                            src={`${certificate.url}#toolbar=0&navpanes=0&view=FitH`}
                            title={`${certificate.company} internship certificate`}
                        />
                    )}
                </div>
            </section>
        </div>,
        document.body,
    );
}

function Internships() {
    const [activeCertificate, setActiveCertificate] = useState(null);

    const closeCertificate = () => {
        setActiveCertificate(null);
    };

    return (
        <div className="internships-page">
            <div className="internships-background" aria-hidden="true">
                <span className="internships-grid-lines" />
                <span className="internships-orb internships-orb-one" />
                <span className="internships-orb internships-orb-two" />
                <span className="internships-symbol internships-symbol-one">EXP</span>
                <span className="internships-symbol internships-symbol-two">04</span>
                <span className="internships-symbol internships-symbol-three">{"</>"}</span>
            </div>

            <section className="internships-hero">
                <div className="container internships-hero-grid">
                    <motion.div
                        className="internships-hero-copy"
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="internships-eyebrow">
                            <span>05</span>
                            <span className="internships-eyebrow-line" />
                            Internships & experience
                        </p>

                        <h1 className="internships-title">
                            Where learning became
                            <span> real delivery.</span>
                        </h1>

                        <p className="internships-intro">
                            Four industry-oriented experiences that helped me move beyond
                            classroom concepts—through structured learning, practical tasks,
                            project submissions and professional development workflows.
                        </p>

                        <div className="internships-hero-facts">
                            <div>
                                <strong>04</strong>
                                <span>Experience programmes</span>
                            </div>
                            <div>
                                <strong>04</strong>
                                <span>Completed internships</span>
                            </div>
                            <div>
                                <strong>03</strong>
                                <span>Certificate</span>
                            </div>
                        </div>

                        <a className="internships-scroll-link" href="#experience-timeline">
                            Explore experience timeline
                            <ArrowDown size={17} aria-hidden="true" />
                        </a>
                    </motion.div>

                    <motion.aside
                        className="experience-pipeline"
                        initial={{ opacity: 0, x: 28, scale: 0.93 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="experience-pipeline-header">
                            <span>
                                <BriefcaseBusiness size={16} />
                                Experience timeline
                            </span>
                            <small>Journey</small>
                        </div>

                        <div className="experience-pipeline-list">
                            {internshipExperiences.map((experience, index) => {
                                const Icon = experienceIcons[experience.visual] ?? BriefcaseBusiness;

                                return (
                                    <div className="experience-pipeline-item" key={experience.key}>
                                        <span className={`experience-pipeline-icon tone-${experience.tone}`}>
                                            <Icon size={18} />
                                        </span>
                                        <div>
                                            <small>{experience.id}</small>
                                            <strong>{experience.company}</strong>
                                            <span>{experience.role}</span>
                                        </div>
                                        <time>{experience.period}</time>
                                        {index < internshipExperiences.length - 1 && (
                                            <i aria-hidden="true" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="experience-pipeline-footer">
                            <Sparkles size={16} />
                            Learning • Building • Delivering
                        </div>
                    </motion.aside>
                </div>
            </section>

            <section className="experience-section" id="experience-timeline">
                <div className="container">
                    <motion.div
                        className="internships-section-heading"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.58 }}
                    >
                        <div>
                            <p className="internships-section-kicker">Professional experience</p>
                            <h2>Internship journey.</h2>
                        </div>
                        <p>
                            Each experience is presented with its verified current status—so
                            completed internships and structured learning programmes stay clear.
                        </p>
                    </motion.div>

                    <div className="internship-card-list">
                        {internshipExperiences.map((experience, index) => {
                            const Icon = experienceIcons[experience.visual] ?? BriefcaseBusiness;

                            return (
                                <motion.article
                                    className={`internship-card tone-${experience.tone}`}
                                    key={experience.key}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.18 }}
                                    transition={{ duration: 0.56, delay: index * 0.07 }}
                                >
                                    <div className="internship-card-content">
                                        <div className="internship-card-topline">
                                            <span className="internship-company-mark">
                                                {experience.initials}
                                            </span>
                                            <span className="internship-number">/ {experience.id}</span>
                                        </div>

                                        <div className="internship-meta-row">
                                            <span>{experience.programme}</span>
                                            <strong className={`internship-status tone-${experience.tone}`}>
                                                {experience.credentialAwarded ? (
                                                    <Check size={14} />
                                                ) : (
                                                    <Clock3 size={14} />
                                                )}
                                                {experience.status}
                                            </strong>
                                        </div>

                                        <h3>{experience.company}</h3>
                                        <h4>
                                            <Icon size={18} />
                                            {experience.role}
                                        </h4>
                                        <time className="internship-period">{experience.period}</time>

                                        <p className="internship-description">{experience.description}</p>

                                        <ul className="internship-highlights">
                                            {experience.highlights.map((highlight) => (
                                                <li key={highlight}>
                                                    <span>
                                                        <Check size={12} />
                                                    </span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="internship-technologies">
                                            {experience.technologies.map((technology) => (
                                                <span key={technology}>{technology}</span>
                                            ))}
                                        </div>

                                        <div className="internship-credential-row">
                                            <div className={`internship-credential ${
                                                experience.credentialAwarded ? "is-awarded" : ""
                                            }`}>
                                                {experience.credentialAwarded ? (
                                                    <Award size={17} />
                                                ) : (
                                                    <Sparkles size={17} />
                                                )}
                                                <span>{experience.credential}</span>
                                            </div>

                                            {experience.certificateUrl && (
                                                <button
                                                    type="button"
                                                    className="internship-certificate-button"
                                                    onClick={() =>
                                                        setActiveCertificate({
                                                            company: experience.company,
                                                            url: experience.certificateUrl,
                                                        })
                                                    }
                                                >
                                                    <FileText size={16} />
                                                    View certificate
                                                    <ArrowRight size={15} />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <InternshipVisual type={experience.visual} />
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="experience-growth-section">
                <div className="container">
                    <motion.div
                        className="experience-growth-panel"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.62 }}
                    >
                        <span className="experience-growth-icon">
                            <BriefcaseBusiness size={25} />
                        </span>
                        <div className="experience-growth-copy">
                            <p className="internships-section-kicker">Professional growth</p>
                            <h2>Experience that shaped my workflow.</h2>
                            <p>
                                These programmes strengthened how I approach task delivery,
                                project documentation, version control and continuous learning.
                            </p>
                        </div>
                        <a
                            className="experience-mail-button"
                            href={`mailto:${personalInfo.email}?subject=Portfolio%20Opportunity`}
                        >
                            <Mail size={18} />
                            Let&apos;s Talk
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>

            <CertificateViewer
                certificate={activeCertificate}
                onClose={closeCertificate}
            />
        </div>
    );
}

export default Internships;
