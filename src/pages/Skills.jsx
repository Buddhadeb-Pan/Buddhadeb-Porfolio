import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowRight,
    BookOpen,
    Boxes,
    Braces,
    BrainCircuit,
    Code2,
    Cpu,
    Database,
    Layers3,
    Monitor,
    Network,
    Rocket,
    Server,
    Sparkles,
    Terminal,
    Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    computerScienceFoundations,
    learningFocus,
    skillCategories,
} from "../data/portfolioData";
import "../styles/skills.css";

const categoryIcons = {
    programming: Code2,
    frontend: Monitor,
    backend: Server,
    tools: Wrench,
};

const foundationIcons = [Braces, Boxes, Database, Cpu, Network];
const focusIcons = [Layers3, Server, BrainCircuit];

const statusLabels = {
    core: "Core Skill",
    working: "Working Knowledge",
    foundation: "Foundation",
    learning: "Currently Learning",
};

const reveal = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
};

function Skills() {
    const totalSkills = skillCategories.reduce(
        (total, category) => total + category.skills.length,
        0,
    );

    const learningSkills = skillCategories.reduce(
        (total, category) =>
            total + category.skills.filter((skill) => skill.status === "learning").length,
        0,
    );

    return (
        <div className="skills-page">
            <div className="skills-background" aria-hidden="true">
                <span className="skills-grid" />
                <span className="skills-orb skills-orb-one" />
                <span className="skills-orb skills-orb-two" />
                <span className="skills-code-symbol skills-symbol-one">{"{ }"}</span>
                <span className="skills-code-symbol skills-symbol-two">{"</>"}</span>
                <span className="skills-code-symbol skills-symbol-three">{"=>"}</span>
            </div>

            <section className="skills-hero">
                <div className="container skills-hero-grid">
                    <motion.div
                        className="skills-hero-copy"
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="skills-eyebrow">
                            <span>03</span>
                            <span className="skills-eyebrow-line" />
                            Skills & toolkit
                        </p>

                        <h1 className="skills-title">
                            A practical toolkit for
                            <span> building better.</span>
                        </h1>

                        <p className="skills-intro">
                            I learn technology by applying it. My current toolkit combines
                            programming, frontend development, backend foundations, data
                            tools and core computer-science concepts.
                        </p>

                        <div className="skills-status-legend" aria-label="Skill status legend">
                            <span className="status-core">Core Skill</span>
                            <span className="status-working">Working Knowledge</span>
                            <span className="status-foundation">Foundation</span>
                            <span className="status-learning">Currently Learning</span>
                        </div>

                        <a className="skills-scroll-link" href="#technical-toolkit">
                            Explore technical toolkit
                            <ArrowDown size={17} aria-hidden="true" />
                        </a>
                    </motion.div>

                    <motion.aside
                        className="skills-console"
                        initial={{ opacity: 0, x: 28, scale: 0.93 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="skills-console-header">
                            <div className="console-dots" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                            </div>
                            <span>
                                <Terminal size={14} />
                                developer.skills.js
                            </span>
                            <small>Active</small>
                        </div>

                        <div className="skills-console-code" aria-label="Developer skill summary">
                            <p>
                                <span className="code-keyword">const</span>{" "}
                                <span className="code-variable">developer</span> = {"{"}
                            </p>
                            <p className="code-indent">
                                focus: <span className="code-string">&quot;Full-Stack Development&quot;</span>,
                            </p>
                            <p className="code-indent">
                                strongest: [
                                <span className="code-string">&quot;C++&quot;</span>,{" "}
                                <span className="code-string">&quot;Web&quot;</span>],
                            </p>
                            <p className="code-indent">
                                mindset: <span className="code-string">&quot;Learn • Build • Improve&quot;</span>,
                            </p>
                            <p>{"};"}</p>
                            <p className="console-output">
                                <span>&gt;</span> toolkit.status = ready_to_grow
                                <i className="console-cursor" />
                            </p>
                        </div>

                        <div className="skills-console-metrics">
                            <div>
                                <strong>{String(totalSkills).padStart(2, "0")}</strong>
                                <span>Skills & tools</span>
                            </div>
                            <div>
                                <strong>{String(skillCategories.length).padStart(2, "0")}</strong>
                                <span>Toolkits</span>
                            </div>
                            <div>
                                <strong>{String(learningSkills).padStart(2, "0")}</strong>
                                <span>Learning now</span>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>

            <section className="technical-toolkit-section" id="technical-toolkit">
                <div className="container">
                    <motion.div
                        className="skills-section-heading"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.58 }}
                    >
                        <div>
                            <p className="skills-section-kicker">Technical toolkit</p>
                            <h2>Technologies I work with.</h2>
                        </div>
                        <p>
                            Grouped by how I use them—not by artificial percentages. Each
                            status reflects my current practical comfort and learning stage.
                        </p>
                    </motion.div>

                    <div className="skill-category-grid">
                        {skillCategories.map((category, categoryIndex) => {
                            const Icon = categoryIcons[category.id] ?? Code2;

                            return (
                                <motion.article
                                    className="skill-category-card"
                                    key={category.id}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: (categoryIndex % 2) * 0.08,
                                    }}
                                >
                                    <div className="skill-category-topline">
                                        <span className="skill-category-icon">
                                            <Icon size={22} />
                                        </span>
                                        <span className="skill-category-number">
                                            / {category.number}
                                        </span>
                                    </div>

                                    <h3>{category.title}</h3>
                                    <p className="skill-category-description">
                                        {category.description}
                                    </p>

                                    <ul className="skill-list">
                                        {category.skills.map((skill) => (
                                            <li key={skill.name}>
                                                <div className="skill-name-group">
                                                    <span
                                                        className={`skill-dot status-${skill.status}`}
                                                        aria-hidden="true"
                                                    />
                                                    <div>
                                                        <strong>{skill.name}</strong>
                                                        <small>{skill.note}</small>
                                                    </div>
                                                </div>

                                                <span
                                                    className={`skill-status status-${skill.status}`}
                                                >
                                                    {statusLabels[skill.status]}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="foundations-section">
                <div className="container">
                    <motion.div
                        className="foundations-heading"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.58 }}
                    >
                        <div className="foundations-heading-icon">
                            <BookOpen size={23} />
                        </div>
                        <div>
                            <p className="skills-section-kicker">Core knowledge</p>
                            <h2>Computer science foundations.</h2>
                        </div>
                    </motion.div>

                    <div className="foundation-grid">
                        {computerScienceFoundations.map((foundation, index) => {
                            const Icon = foundationIcons[index] ?? BookOpen;

                            return (
                                <motion.article
                                    className="foundation-card"
                                    key={foundation.number}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.5, delay: index * 0.055 }}
                                >
                                    <div className="foundation-card-topline">
                                        <Icon size={20} />
                                        <span>{foundation.number}</span>
                                    </div>
                                    <h3>{foundation.title}</h3>
                                    <p>{foundation.description}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="learning-section">
                <div className="container">
                    <motion.div
                        className="learning-panel"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.62 }}
                    >
                        <div className="learning-panel-copy">
                            <span className="learning-panel-icon">
                                <Rocket size={24} />
                            </span>
                            <p className="skills-section-kicker">Growth in progress</p>
                            <h2>What I&apos;m improving now.</h2>
                            <p>
                                My skill set is not static. These are the areas receiving
                                focused practice through projects and regular study.
                            </p>
                        </div>

                        <div className="learning-focus-list">
                            {learningFocus.map((focus, index) => {
                                const Icon = focusIcons[index] ?? Sparkles;

                                return (
                                    <div className="learning-focus-card" key={focus.title}>
                                        <span>
                                            <Icon size={19} />
                                        </span>
                                        <div>
                                            <strong>{focus.title}</strong>
                                            <p>{focus.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <div className="skills-next-page">
                        <span>See these skills in action</span>
                        <Link to="/projects">
                            Explore my projects
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
