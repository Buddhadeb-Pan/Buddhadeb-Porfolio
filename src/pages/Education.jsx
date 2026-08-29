import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowRight,
    Award,
    BookOpen,
    Building2,
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    MapPin,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    educationJourney,
    semesterResults,
} from "../data/portfolioData";
import "../styles/education.css";

const educationIcons = [GraduationCap, BookOpen, Award];

const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

function Education() {
    return (
        <div className="education-page">
            <div className="education-background" aria-hidden="true">
                <span className="education-glow education-glow-one" />
                <span className="education-glow education-glow-two" />
                <span className="education-grid-lines" />
            </div>

            <section className="education-hero">
                <div className="container education-hero-grid">
                    <motion.div
                        className="education-hero-copy"
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="education-eyebrow">
                            <span>02</span>
                            <span className="education-eyebrow-line" />
                            Education
                        </p>

                        <h1 className="education-title">
                            Learning that grows into
                            <span> real-world skill.</span>
                        </h1>

                        <p className="education-intro">
                            My academic journey has shaped the way I think, solve
                            problems and build. Alongside formal education, I keep
                            turning concepts into practical development experience.
                        </p>

                        <div className="education-hero-tags">
                            <span>
                                <GraduationCap size={17} />
                                B.Tech CSE
                            </span>
                            <span>
                                <Building2 size={17} />
                                Brainware University
                            </span>
                            <span>
                                <CalendarDays size={17} />
                                2023 — 2027
                            </span>
                        </div>

                        <a className="education-scroll" href="#academic-journey">
                            Explore academic journey
                            <ArrowDown size={17} aria-hidden="true" />
                        </a>
                    </motion.div>

                    <motion.aside
                        className="academic-snapshot"
                        initial={{ opacity: 0, scale: 0.92, x: 28 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 0.78,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="snapshot-topline">
                            <span>
                                <Sparkles size={15} />
                                Academic snapshot
                            </span>
                            <small>Current</small>
                        </div>

                        <div className="academic-score-ring">
                            <div className="academic-score-inner">
                                <strong>8.17</strong>
                                <span>CGPA / 10</span>
                            </div>
                        </div>

                        <div className="snapshot-details">
                            <div>
                                <span>Programme</span>
                                <strong>B.Tech • CSE</strong>
                            </div>
                            <div>
                                <span>University</span>
                                <strong>Brainware University</strong>
                            </div>
                            <div>
                                <span>Status</span>
                                <strong className="snapshot-status">
                                    <span />
                                    Pursuing
                                </strong>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>

            <section className="education-journey-section" id="academic-journey">
                <div className="container">
                    <motion.div
                        className="education-section-heading"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.58 }}
                    >
                        <div>
                            <p className="education-section-kicker">Academic timeline</p>
                            <h2>My education journey.</h2>
                        </div>
                        <p>
                            Three important stages that created my academic foundation
                            and led me towards software development.
                        </p>
                    </motion.div>

                    <div className="education-timeline">
                        {educationJourney.map((item, index) => {
                            const Icon = educationIcons[index] ?? BookOpen;

                            return (
                                <motion.article
                                    className={`education-entry ${
                                        index === 0 ? "is-current" : ""
                                    }`}
                                    key={item.id}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                >
                                    <div className="education-period">
                                        <span>{item.period}</span>
                                        <small>{item.stage}</small>
                                    </div>

                                    <div className="education-marker" aria-hidden="true">
                                        <span>
                                            <Icon size={18} />
                                        </span>
                                    </div>

                                    <div className="education-card">
                                        <div className="education-card-topline">
                                            <span className="education-card-number">
                                                / {item.id}
                                            </span>
                                            <span className="education-card-status">
                                                <CheckCircle2 size={14} />
                                                {item.status}
                                            </span>
                                        </div>

                                        <h3>{item.title}</h3>

                                        <p className="education-institution">
                                            <Building2 size={17} />
                                            {item.institution}
                                        </p>

                                        <p className="education-location">
                                            <MapPin size={15} />
                                            {item.location}
                                        </p>

                                        <p className="education-description">
                                            {item.description}
                                        </p>

                                        <div className="education-result">
                                            <span>{item.resultLabel}</span>
                                            <strong>{item.result}</strong>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="semester-section">
                <div className="container">
                    <motion.div
                        className="semester-panel"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.62 }}
                    >
                        <div className="semester-summary">
                            <span className="semester-icon">
                                <TrendingUp size={24} />
                            </span>
                            <p className="education-section-kicker">B.Tech performance</p>
                            <h2>Semester progress.</h2>
                            <p>
                                A clear view of my recorded semester-wise SGPA and
                                current overall academic position.
                            </p>

                            <div className="semester-current-score">
                                <span>Current CGPA</span>
                                <strong>8.17</strong>
                                <small>Consistent academic progress</small>
                            </div>
                        </div>

                        <div className="semester-bars">
                            {semesterResults.map((result, index) => (
                                <div className="semester-row" key={result.semester}>
                                    <div className="semester-row-heading">
                                        <span>{result.semester}</span>
                                        <strong>{result.score.toFixed(2)}</strong>
                                    </div>

                                    <div className="semester-track">
                                        <span
                                            className="semester-fill"
                                            style={{
                                                "--semester-progress": `${
                                                    (result.score / 10) * 100
                                                }%`,
                                                "--semester-delay": `${index * 0.12}s`,
                                            }}
                                        />
                                    </div>

                                    <small>{result.shortLabel} SGPA</small>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="education-next-page">
                        <span>Next chapter</span>
                        <Link to="/skills">
                            Explore my skills
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Education;
