import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
    AlertCircle,
    ArrowUpRight,
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    Mail,
    MessageSquareText,
    Send,
    Sparkles,
    X,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "../styles/contact-modal.css";

const emptyForm = {
    name: "",
    email: "",
    message: "",
    website: "",
};

function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState(emptyForm);
    const [submitState, setSubmitState] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previouslyFocused = document.activeElement;

        setSubmitState("idle");
        setErrorMessage("");
        document.body.classList.add("contact-modal-open");

        const focusTimer = window.setTimeout(() => {
            firstInputRef.current?.focus();
        }, 120);

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.clearTimeout(focusTimer);
            window.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove("contact-modal-open");
            previouslyFocused?.focus?.();
        };
    }, [isOpen, onClose]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitState("sending");
    setErrorMessage("");

    try {
        const response = await fetch(
            `https://formsubmit.co/ajax/${personalInfo.email}`,
            {
                method: "POST",

                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name: formData.name.trim(),

                    email: formData.email.trim(),

                    message: formData.message.trim(),

                    _replyto:
                        formData.email.trim(),

                    _subject:
                        `New portfolio message from ${formData.name.trim()}`,

                    _template: "table",

                    _captcha: "false",

                    _honey:
                        formData.website,

                    _url:
                        window.location.href,
                }),
            }
        );

        const result = await response
            .json()
            .catch(() => ({}));

        if (
            !response.ok ||
            result.success === false ||
            result.success === "false"
        ) {
            throw new Error(
                "Message service failed"
            );
        }

        setSubmitState("success");
        setFormData(emptyForm);
    } catch {
        setSubmitState("error");

        setErrorMessage(
            "The message could not be sent right now. Please try again or use the direct email link."
        );
    }
};
    if (!isOpen || typeof document === "undefined") {
        return null;
    }

    return createPortal(
        <div
            className="contact-modal-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                className="contact-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
            >
                <span className="contact-modal-glow contact-modal-glow-one" />
                <span className="contact-modal-glow contact-modal-glow-two" />

                <aside className="contact-modal-profile">
                    <div className="contact-profile-grid" aria-hidden="true" />

                    <div className="contact-profile-content">
                        <span className="contact-availability">
                            <span />
                            Open to opportunities
                        </span>

                        <div className="contact-profile-icon" aria-hidden="true">
                            <MessageSquareText size={28} />
                        </div>

                        <p className="contact-profile-kicker">Let&apos;s create something</p>
                        <h2 id="contact-modal-title">
                            Have an idea?
                            <span> Let&apos;s talk.</span>
                        </h2>

                        <p className="contact-profile-copy">
                            Share a project, internship opportunity or collaboration idea.
                            I&apos;d be happy to hear about it.
                        </p>

                        <a
                            className="contact-email-link"
                            href={`mailto:${personalInfo.email}`}
                        >
                            <Mail size={17} />
                            <span>
                                <small>Direct email</small>
                                {personalInfo.email}
                            </span>
                        </a>

                        <div className="contact-social-heading">
                            <span>Connect with me</span>
                            <i />
                        </div>

                        <div className="contact-social-cards">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-card"
                            >
                                <span className="contact-social-icon github">
                                    <Code2 size={22} />
                                </span>

                                <span className="contact-social-copy">
                                    <strong>GitHub</strong>
                                    <small>Explore code &amp; projects</small>
                                </span>

                                <ArrowUpRight size={18} />
                            </a>

                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-card"
                            >
                                <span className="contact-social-icon linkedin">
                                    <BriefcaseBusiness size={22} />
                                </span>

                                <span className="contact-social-copy">
                                    <strong>LinkedIn</strong>
                                    <small>View professional journey</small>
                                </span>

                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </aside>

                <div className="contact-form-panel">
                    <button
                        className="contact-modal-close"
                        type="button"
                        aria-label="Close contact form"
                        onClick={onClose}
                    >
                        <X size={20} />
                    </button>

                    {submitState === "success" ? (
                        <div className="contact-success" aria-live="polite">
                            <span className="contact-success-orbit" aria-hidden="true">
                                <CheckCircle2 size={42} />
                            </span>

                            <span className="contact-form-eyebrow">
                                <Sparkles size={15} />
                                Message delivered
                            </span>

                            <h3>Thank you for reaching out.</h3>
                            <p>
                                Your message has been sent successfully. I&apos;ll review it
                                and connect with you through email.
                            </p>

                            <div className="contact-success-actions">
                                <button
                                    className="contact-send-another"
                                    type="button"
                                    onClick={() => setSubmitState("idle")}
                                >
                                    Send another message
                                </button>

                                <button
                                    className="contact-success-close"
                                    type="button"
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <header className="contact-form-header">
                                <span className="contact-form-eyebrow">
                                    <Sparkles size={15} />
                                    Start a conversation
                                </span>

                                <h3>Send me a message</h3>
                                <p>
                                    A few details are enough. Your message will arrive
                                    directly in my inbox.
                                </p>
                            </header>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-row">
                                    <label className="contact-field">
                                        <span>Your name</span>
                                        <input
                                            ref={firstInputRef}
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            autoComplete="name"
                                            minLength="2"
                                            maxLength="70"
                                            required
                                        />
                                    </label>

                                    <label className="contact-field">
                                        <span>Email address</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            autoComplete="email"
                                            maxLength="120"
                                            required
                                        />
                                    </label>
                                </div>

                                <label className="contact-field contact-message-field">
                                    <span>Your message</span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me a little about the opportunity or project..."
                                        rows="5"
                                        minLength="10"
                                        maxLength="800"
                                        required
                                    />

                                    <small>{formData.message.length}/800</small>
                                </label>

                                <label className="contact-honeypot" aria-hidden="true">
                                    Website
                                    <input
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />
                                </label>

                                {submitState === "error" && (
                                    <div className="contact-form-error" role="alert">
                                        <AlertCircle size={18} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    className="contact-submit"
                                    type="submit"
                                    disabled={submitState === "sending"}
                                >
                                    <span>
                                        {submitState === "sending"
                                            ? "Sending message..."
                                            : "Send message"}
                                    </span>

                                    {submitState === "sending" ? (
                                        <span className="contact-submit-loader" />
                                    ) : (
                                        <Send size={18} />
                                    )}
                                </button>

                                <p className="contact-form-note">
                                    <span />
                                    Your details are used only to respond to your message.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </div>,
        document.body,
    );
}

export default ContactModal;
