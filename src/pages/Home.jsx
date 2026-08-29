import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    AnimatePresence,
    motion,
} from "motion/react";

import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Download,
    MapPin,
    Volume2,
    VolumeX,
} from "lucide-react";

import { Link } from "react-router-dom";

import profileImage from "../assets/profile.png";

import {
    codeSymbols,
    heroPhrases,
    heroStatistics,
    personalInfo,
    technologyBadges,
} from "../data/portfolioData";

import "../styles/home.css";

function Home() {
    const homeRef = useRef(null);
    const audioContextRef = useRef(null);

    const [activePhrase, setActivePhrase] =
        useState(0);

    const [soundEnabled, setSoundEnabled] =
        useState(false);

    const playSwitchSound = useCallback(async () => {
    if (typeof window === "undefined") return;

    const AudioContext =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
    }

    const context = audioContextRef.current;

    if (context.state === "suspended") {
        await context.resume();
    }

    const start = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "square";

    oscillator.frequency.setValueAtTime(230, start);
    oscillator.frequency.exponentialRampToValueAtTime(
        95,
        start + 0.09
    );

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(
        0.075,
        start + 0.008
    );
    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        start + 0.11
    );

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start);
    oscillator.stop(start + 0.12);
}, []);

useEffect(() => {
    const phraseTimer = window.setInterval(() => {
        setActivePhrase(
            (current) =>
                (current + 1) % heroPhrases.length
        );

        if (soundEnabled && !document.hidden) {
            playSwitchSound();
        }
    }, 2000);

    return () => {
        window.clearInterval(phraseTimer);
    };
}, [playSwitchSound, soundEnabled]);

useEffect(() => {
    return () => {
        audioContextRef.current?.close();
    };
}, []);

const toggleSound = async () => {
    const nextValue = !soundEnabled;

    setSoundEnabled(nextValue);

    if (nextValue) {
        await playSwitchSound();
    }
};
    const handlePointerMove = (event) => {
        const home = homeRef.current;

        if (
            !home ||
            window
                .matchMedia("(pointer: coarse)")
                .matches
        ) {
            return;
        }

        const bounds =
            home.getBoundingClientRect();

        const x = Math.min(
            Math.max(
                event.clientX - bounds.left,
                0,
            ),
            bounds.width,
        );

        const y = Math.min(
            Math.max(
                event.clientY - bounds.top,
                0,
            ),
            bounds.height,
        );

        const xRatio =
            x / bounds.width;

        const yRatio = Math.min(
            Math.max(
                event.clientY /
                    Math.max(
                        window.innerHeight,
                        1,
                    ),
                0,
            ),
            1,
        );

        home.style.setProperty(
            "--pointer-x",
            `${x}px`,
        );

        home.style.setProperty(
            "--pointer-y",
            `${y}px`,
        );

        home.style.setProperty(
            "--profile-rotate-y",
            `${(xRatio - 0.5) * 8}deg`,
        );

        home.style.setProperty(
            "--profile-rotate-x",
            `${(0.5 - yRatio) * 6}deg`,
        );
    };

    const resetPointer = () => {
        const home = homeRef.current;

        if (!home) {
            return;
        }

        home.style.setProperty(
            "--profile-rotate-y",
            "0deg",
        );

        home.style.setProperty(
            "--profile-rotate-x",
            "0deg",
        );
    };

    return (
        <div
            className="home-page"
            ref={homeRef}
            onPointerMove={
                handlePointerMove
            }
            onPointerLeave={
                resetPointer
            }
        >
            <div
                className="home-background"
                aria-hidden="true"
            >
                <div className="cursor-spotlight" />

                <div className="ambient-orb ambient-orb-one" />

                <div className="ambient-orb ambient-orb-two" />

                <div className="code-symbols">
                    {codeSymbols.map((symbol, index) => (
    <span
        className={`code-symbol code-symbol-${index + 1}`}
        key={`${symbol}-${index}`}
    >
        {symbol}
    </span>
))}
                        
                    
                </div>

                <div className="page-edge-glow">
                    <span className="edge edge-top" />
                    <span className="edge edge-right" />
                    <span className="edge edge-bottom" />
                    <span className="edge edge-left" />
                </div>
            </div>

            <section className="hero-section">
                <div className="container hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{
                            opacity: 0,
                            x: -34,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.75,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <div className="hero-status-row">
                            <span className="availability-pill">
                                <span className="availability-dot" />

                                Final-Year B.Tech CSE
                                Student
                            </span>

                            <button
                                className={`sound-toggle ${
                                    soundEnabled
                                        ? "is-on"
                                        : ""
                                }`}
                                type="button"
                                onClick={
                                    toggleSound
                                }
                                aria-pressed={
                                    soundEnabled
                                }
                            >
                                {soundEnabled ? (
                                    <Volume2
                                        size={16}
                                    />
                                ) : (
                                    <VolumeX
                                        size={16}
                                    />
                                )}

                                {soundEnabled
                                    ? "Sound on"
                                    : "Sound off"}
                            </button>
                        </div>

                        <p className="hero-greeting">
                            Hello, I&apos;m
                        </p>

                        <h1 className="hero-name">
                            Buddhadeb{" "}
                            <span>Pan.</span>
                        </h1>

                        <h2 className="hero-headline">
                            Turning what I learn
                            into
                            <span>
                                {" "}
                                practical digital
                                solutions.
                            </span>
                        </h2>

                        <div
                            className="rhythm-display"
                            aria-live="polite"
                        >
                            <span className="rhythm-index">
                                {String(
                                    activePhrase + 1,
                                ).padStart(
                                    2,
                                    "0",
                                )}
                            </span>

                            <span className="rhythm-line" />

                            <AnimatePresence mode="wait">
                                <motion.strong
                                    key={
                                        heroPhrases[
                                            activePhrase
                                        ]
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 12,
                                        filter:
                                            "blur(5px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter:
                                            "blur(0px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -10,
                                        filter:
                                            "blur(4px)",
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    {
                                        heroPhrases[
                                            activePhrase
                                        ]
                                    }
                                </motion.strong>
                            </AnimatePresence>
                        </div>

                        <p className="hero-description">
                            I&apos;m a final-year
                            Computer Science student
                            at Brainware University
                            with practical exposure
                            through three internship
                            experiences and four-plus
                            real-world projects. I
                            work with C++, HTML, CSS,
                            JavaScript and Python
                            while strengthening my
                            skills in React, backend
                            development and data
                            structures.
                        </p>

                        <div className="hero-actions">
                            <Link
                                className="button button-primary"
                                to="/projects"
                            >
                                Explore My Projects

                                <ArrowRight
                                    size={18}
                                />
                            </Link>

                            <a
                                className="button button-secondary"
                                href={
                                    personalInfo.resume
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Resume

                                <Download
                                    size={18}
                                />
                            </a>
                        </div>

                        <div className="hero-contact-row">
                            <span>
                                <MapPin
                                    size={16}
                                />

                                {
                                    personalInfo.location
                                }
                            </span>

                            <div className="hero-socials">
                                <a
                                    href={
                                        personalInfo.github
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visit GitHub profile"
                                >
                                    <Code2
                                        size={18}
                                    />
                                </a>

                                <a
                                    href={
                                        personalInfo.linkedin
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <BriefcaseBusiness
                                        size={18}
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.85,
                            delay: 0.12,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <div className="profile-parallax">
                            <div className="profile-orbit orbit-one" />
                            <div className="profile-orbit orbit-two" />
                            <div className="profile-orbit orbit-three" />

                            <div className="profile-shell">
                                <div className="profile-glow" />

                                <div className="profile-media">
                                    <span
                                        className="profile-fallback"
                                        aria-hidden="true"
                                    >
                                        {
                                            personalInfo.initials
                                        }
                                    </span>

                                    <img
                                        src={
                                            profileImage
                                        }
                                        alt="Buddhadeb Pan"
                                    />
                                </div>
                            </div>

                            {technologyBadges.map(
                                (
                                    technology,
                                    index,
                                ) => (
                                    <motion.span
                                        className={`tech-badge tech-badge-${
                                            index +
                                            1
                                        }`}
                                        key={
                                            technology
                                        }
                                        animate={{
                                            y: [
                                                0,
                                                -10,
                                                0,
                                            ],
                                        }}
                                        transition={{
                                            duration:
                                                3.6 +
                                                index *
                                                    0.35,
                                            repeat:
                                                Infinity,
                                            ease:
                                                "easeInOut",
                                            delay:
                                                index *
                                                0.35,
                                        }}
                                    >
                                        {
                                            technology
                                        }
                                    </motion.span>
                                ),
                            )}

                            <div className="visual-card focus-card">
                                <small>
                                    Current focus
                                </small>

                                <strong>
                                    React Development
                                </strong>

                                <span>
                                    Learning through
                                    practice
                                </span>
                            </div>

                            <div className="visual-card project-card-mini">
                                <small>
                                    Currently building
                                </small>

                                <strong>
                                    SecureCode AI
                                </strong>

                                <span>
                                    Final-Year Project
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="container hero-statistics"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.65,
                        delay: 0.55,
                    }}
                >
                    {heroStatistics.map(
                        (stat) => (
                            <div
                                className="hero-stat"
                                key={stat.label}
                            >
                                <strong>
                                    {stat.value}
                                </strong>

                                <span>
                                    {stat.label}
                                </span>
                            </div>
                        ),
                    )}

                    <a
                        className="scroll-cue"
                        href="#home-end"
                    >
                        Scroll to explore

                        <ArrowDown size={17} />
                    </a>
                </motion.div>
            </section>

            <div
                id="home-end"
                className="home-end"
                aria-hidden="true"
            >
                <span>Learning</span>
                <ArrowUpRight size={18} />

                <span>Building</span>
                <ArrowUpRight size={18} />

                <span>Improving</span>
            </div>
        </div>
    );
}

export default Home;