import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowRight,
    Bot,
    Calculator,
    Check,
    Circle,
    Clock3,
    Code2,
    Rocket,
    ShieldCheck,
    Sparkles,
    Wallet,
} from "lucide-react";

import { portfolioProjects } from "../data/portfolioData";
import "../styles/projects.css";

const projectIcons = {
    security: ShieldCheck,
    expense: Wallet,
    calculator: Calculator,
    chatbot: Bot,
};

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

function SecurityVisual() {
    return (
        <div className="project-demo security-demo" aria-label="SourceCode AI interface visual">
            <div className="demo-window-bar">
                <div className="demo-window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
                <span>source-analysis.js</span>
                <small>Scanning</small>
            </div>

            <div className="security-code-panel">
                <div className="security-code-heading">
                    <span>
                        <Code2 size={15} />
                        Code review engine
                    </span>
                    <strong>AI</strong>
                </div>

                <div className="security-code-lines" aria-hidden="true">
                    <span style={{ "--code-width": "82%" }} />
                    <span style={{ "--code-width": "64%" }} />
                    <span className="is-warning" style={{ "--code-width": "91%" }} />
                    <span style={{ "--code-width": "72%" }} />
                    <span style={{ "--code-width": "56%" }} />
                    <i className="security-scan-line" />
                </div>

                <div className="security-engine-status">
                    <span>
                        <Check size={14} />
                        Frontend complete
                    </span>
                    <span className="is-active">
                        <Clock3 size={14} />
                        Backend building
                    </span>
                </div>
            </div>
        </div>
    );
}

function ExpenseVisual() {
    const bars = [46, 72, 55, 84, 62, 91, 69];

    return (
        <div className="project-demo expense-demo" aria-label="Expense Tracker dashboard visual">
            <div className="expense-demo-header">
                <span>
                    <Wallet size={17} />
                    Spending overview
                </span>
                <small>Frontend ready</small>
            </div>

            <div className="expense-demo-content">
                <div className="expense-mini-chart">
                    <span className="expense-chart-label">Monthly flow</span>
                    <div className="expense-bars" aria-hidden="true">
                        {bars.map((height, index) => (
                            <span
                                className={index === 5 ? "is-highlighted" : ""}
                                key={`${height}-${index}`}
                                style={{ "--bar-height": `${height}%` }}
                            />
                        ))}
                    </div>
                </div>

                <div className="expense-donut-wrap">
                    <div className="expense-donut">
                        <span>Track</span>
                    </div>
                    <small>Review • Improve</small>
                </div>
            </div>

            <div className="expense-categories" aria-hidden="true">
                <span>Food</span>
                <span>Travel</span>
                <span>Rent</span>
            </div>
        </div>
    );
}

function CalculatorVisual() {
    const keys = ["sin", "cos", "√", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+"];

    return (
        <div className="project-demo calculator-demo" aria-label="Advanced Calculator concept visual">
            <div className="calculator-display">
                <small>Advanced mode</small>
                <strong>PLAN_01</strong>
                <span>Building a smarter calculation experience</span>
            </div>

            <div className="calculator-keypad" aria-hidden="true">
                {keys.map((key, index) => (
                    <span className={index < 4 || index % 4 === 3 ? "is-function" : ""} key={`${key}-${index}`}>
                        {key}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ChatbotVisual() {
    return (
        <div className="project-demo chatbot-demo" aria-label="Upcoming AI Chatbot visual">
            <div className="chatbot-demo-header">
                <span className="chatbot-avatar">
                    <Bot size={19} />
                </span>
                <div>
                    <strong>AI Assistant</strong>
                    <small>Upcoming project</small>
                </div>
                <span className="chatbot-status-dot" aria-hidden="true" />
            </div>

            <div className="chatbot-messages">
                <p className="chatbot-message is-user">What are we building next?</p>
                <p className="chatbot-message is-bot">
                    A useful conversational AI experience.
                </p>
                <div className="chatbot-typing" aria-label="AI is typing">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
}

function ProjectVisual({ type }) {
    if (type === "security") return <SecurityVisual />;
    if (type === "expense") return <ExpenseVisual />;
    if (type === "calculator") return <CalculatorVisual />;
    return <ChatbotVisual />;
}

function Projects() {
    const openContactModal = () => {
    window.dispatchEvent(
        new Event("portfolio:open-contact")
    );
};
    return (
        <div className="projects-page">
            <div className="projects-background" aria-hidden="true">
                <span className="projects-grid-lines" />
                <span className="projects-orb projects-orb-one" />
                <span className="projects-orb projects-orb-two" />
                <span className="projects-symbol projects-symbol-one">01</span>
                <span className="projects-symbol projects-symbol-two">{"</>"}</span>
                <span className="projects-symbol projects-symbol-three">AI</span>
            </div>

            <section className="projects-hero">
                <div className="container projects-hero-grid">
                    <motion.div
                        className="projects-hero-copy"
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="projects-eyebrow">
                            <span>04</span>
                            <span className="projects-eyebrow-line" />
                            Projects & roadmap
                        </p>

                        <h1 className="projects-title">
                            What I&apos;ve built—and
                            <span> what comes next.</span>
                        </h1>

                        <p className="projects-intro">
                            A transparent view of my current work, completed frontend
                            milestones and future project ideas. Each build represents a
                            different stage of learning, planning and practical development.
                        </p>

                        <div className="projects-hero-facts">
                            <div>
                                <strong>04</strong>
                                <span>Project roadmap</span>
                            </div>
                            <div>
                                <strong>02</strong>
                                <span>Frontends ready</span>
                            </div>
                            <div>
                                <strong>02</strong>
                                <span>Future directions</span>
                            </div>
                        </div>

                        <a className="projects-scroll-link" href="#project-showcase">
                            Explore project journey
                            <ArrowDown size={17} aria-hidden="true" />
                        </a>
                    </motion.div>

                    <motion.aside
                        className="project-pipeline"
                        initial={{ opacity: 0, x: 28, scale: 0.93 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="pipeline-header">
                            <span>
                                <Rocket size={16} />
                                Project pipeline
                            </span>
                            <small>Live roadmap</small>
                        </div>

                        <div className="pipeline-list">
                            {portfolioProjects.map((project, index) => {
                                const Icon = projectIcons[project.visual] ?? Code2;

                                return (
                                    <div className="pipeline-item" key={project.id}>
                                        <div className={`pipeline-icon tone-${project.tone}`}>
                                            <Icon size={18} />
                                        </div>
                                        <div className="pipeline-copy">
                                            <span>{project.id}</span>
                                            <strong>{project.title}</strong>
                                            <small>{project.pipelineLabel}</small>
                                        </div>
                                        <span className={`pipeline-state tone-${project.tone}`}>
                                            {project.status}
                                        </span>
                                        {index < portfolioProjects.length - 1 && (
                                            <i className="pipeline-connector" aria-hidden="true" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pipeline-footer">
                            <Sparkles size={16} />
                            <span>From concept to useful product.</span>
                        </div>
                    </motion.aside>
                </div>
            </section>

            <section className="project-showcase-section" id="project-showcase">
                <div className="container">
                    <motion.div
                        className="projects-section-heading"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.58 }}
                    >
                        <div>
                            <p className="projects-section-kicker">Selected work</p>
                            <h2>Current builds. Future direction.</h2>
                        </div>
                        <p>
                            The status on every card shows exactly where the project stands
                            today—complete, in progress, being planned or upcoming.
                        </p>
                    </motion.div>

                    <div className="project-card-grid">
                        {portfolioProjects.map((project, index) => {
                            const Icon = projectIcons[project.visual] ?? Code2;

                            return (
                                <motion.article
                                    className={`project-showcase-card tone-${project.tone} ${
                                        project.featured ? "is-featured" : ""
                                    }`}
                                    key={project.key}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.16 }}
                                    transition={{ duration: 0.56, delay: index === 0 ? 0 : (index % 3) * 0.07 }}
                                >
                                    <div className="project-card-content">
                                        <div className="project-card-topline">
                                            <span className="project-card-icon">
                                                <Icon size={22} />
                                            </span>
                                            <span className="project-card-number">/ {project.id}</span>
                                        </div>

                                        <div className="project-card-labels">
                                            <span>{project.type}</span>
                                            <strong className={`project-status tone-${project.tone}`}>
                                                <Circle size={8} fill="currentColor" />
                                                {project.status}
                                            </strong>
                                        </div>

                                        <h3>{project.title}</h3>
                                        <p className="project-summary">{project.summary}</p>

                                        <div className="project-progress-note">
                                            <Clock3 size={16} />
                                            <p>{project.progressNote}</p>
                                        </div>

                                        <div className="project-technologies" aria-label={`${project.title} technologies`}>
                                            {project.technologies.map((technology) => (
                                                <span key={technology}>{technology}</span>
                                            ))}
                                        </div>

                                        <div className="project-stage-track">
                                            {project.stages.map((stage, stageIndex) => (
                                                <div className={`project-stage state-${stage.state}`} key={stage.label}>
                                                    <span className="project-stage-dot">
                                                        {stage.state === "complete" ? (
                                                            <Check size={12} />
                                                        ) : stage.state === "active" ? (
                                                            <Clock3 size={12} />
                                                        ) : (
                                                            <Circle size={8} />
                                                        )}
                                                    </span>
                                                    <small>{stage.label}</small>
                                                    {stageIndex < project.stages.length - 1 && (
                                                        <i aria-hidden="true" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <ProjectVisual type={project.visual} />
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="project-roadmap-section">
                <div className="container">
                    <motion.div
                        className="project-roadmap-panel"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.62 }}
                    >
                        <div className="roadmap-panel-icon">
                            <Rocket size={25} />
                        </div>
                        <div className="roadmap-panel-copy">
                            <p className="projects-section-kicker">Build philosophy</p>
                            <h2>Build in stages. Improve with purpose.</h2>
                            <p>
                                My roadmap keeps finished work, active development and future
                                ideas clearly separated—so every project can grow without losing
                                direction.
                            </p>
                        </div>
                        <div className="roadmap-status-list">
                            <span className="is-complete">
                                <Check size={16} />
                                Completed milestone
                            </span>
                            <span className="is-active">
                                <Clock3 size={16} />
                                Work in progress
                            </span>
                            <span className="is-upcoming">
                                <Sparkles size={16} />
                                Upcoming direction
                            </span>
                        </div>
                    </motion.div>

                    <div className="projects-next-page">
                        <span>Want to discuss a project?</span>
                        <button
    type="button"
    onClick={openContactModal}
>
    Let&apos;s connect
    <ArrowRight size={18} />
</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
