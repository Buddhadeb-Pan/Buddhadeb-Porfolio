const publicAsset = (path) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const personalInfo = {

    name: "Buddhadeb Pan",
    initials: "BP",

    navSubtitle: "Final-Year CSE Student • Aspiring Software Developer",

    location: "Birbhum, West Bengal, India",

    email: "panbuddhadeb230@gmail.com",

    github: "https://github.com/Buddhadeb-Pan",

    linkedin: "https://www.linkedin.com/in/buddhadeb-pan-500069270",

    resume: publicAsset("resume.pdf"),
};


export const navigationLinks = [{
        label: "Home",
        path: "/",
    },
    {
        label: "Education",
        path: "/education",
    },
    {
        label: "Skills",
        path: "/skills",
    },
    {
        label: "Projects",
        path: "/projects",
    },
    {
        label: "Internships",
        path: "/internships",
    },
];


export const heroPhrases = [
    "4 INTERNSHIP EXPERIENCES",
    "4+ REAL-WORLD PROJECTS",
    "LEARNING REACT",
    "PRACTISING C++ & DSA",
    "GROWING THROUGH REAL PROJECTS",
];


export const heroStatistics = [{
        value: "04",
        label: "Internship Experiences",
    },
    {
        value: "04+",
        label: "Real-World Projects",
    },
    {
        value: "8.17",
        label: "Current CGPA",
    },
];


export const technologyBadges = [
    "C++",
    "Python",
    "React",
    "JavaScript",
];


export const codeSymbols = [
    "</>",
    "{ }",
    "[ ]",
    "const",
    "01",
    "( )",
    "=>",
    "#",
    "C++",
    "React",
    "{...}",
    "&&",
];


export const educationJourney = [{
        id: "01",

        period: "2023 — 2027",

        stage: "Undergraduate Degree",

        title: "B.Tech in Computer Science & Engineering",

        institution: "Brainware University",

        location: "Kolkata, West Bengal",

        resultLabel: "Current CGPA",

        result: "8.17",

        status: "Pursuing",

        description: "Building a strong foundation in software development, data structures, databases, computer networks and practical project development.",
    },

    {
        id: "02",

        period: "2021 — 2023",

        stage: "Higher Secondary",

        title: "Science Stream",

        institution: "Sree Sree Sarada Vidyapith",

        location: "West Bengal",

        resultLabel: "Final Result",

        result: "67%",

        status: "Completed",

        description: "Completed higher secondary education in the Science stream and developed the analytical base for pursuing Computer Science and Engineering.",
    },

    {
        id: "03",

        period: "2021",

        stage: "Secondary Education",

        title: "Madhyamik",

        institution: "Kendragoria High School",

        location: "West Bengal",

        resultLabel: "Final Result",

        result: "85%",

        status: "Completed",

        description: "Completed secondary education with a strong academic result and a growing interest in mathematics, science and technology.",
    },
];


export const semesterResults = [{
        semester: "Semester 01",
        shortLabel: "Sem 1",
        score: 8.11,
    },
    {
        semester: "Semester 02",
        shortLabel: "Sem 2",
        score: 7.98,
    },
    {
        semester: "Semester 03",
        shortLabel: "Sem 3",
        score: 7.93,
    },
    {
        semester: "Semester 04",
        shortLabel: "Sem 4",
        score: 8.66,
    },
];


export const skillCategories = [{
        id: "programming",

        number: "01",

        title: "Programming Languages",

        description: "Languages I use for problem solving, scripting and application logic.",

        skills: [{
                name: "C++",

                note: "DSA and problem solving",

                status: "core",
            },

            {
                name: "Python",

                note: "Projects and data workflows",

                status: "working",
            },

            {
                name: "JavaScript",

                note: "Web logic and interactivity",

                status: "core",
            },
            {
                name: "SQL",
                note: "Database queries and data management",
                status: "working",
            },


        ],
    },

    {
        id: "frontend",

        number: "02",

        title: "Frontend Development",

        description: "Tools I use to create responsive and interactive web experiences.",

        skills: [{
                name: "HTML5",

                note: "Semantic page structure",

                status: "core",
            },

            {
                name: "CSS3",

                note: "Responsive UI and animation",

                status: "core",
            },

            {
                name: "JavaScript DOM",

                note: "Browser interaction and events",

                status: "working",
            },

            {
                name: "React",

                note: "Components, state and routing",

                status: "learning",
            },

            {
                name: "Vite",

                note: "Modern frontend development setup",

                status: "working",
            },

            {
                name: "Responsive Design",

                note: "Mobile, tablet and desktop layouts",

                status: "working",
            },
        ],
    },

    {
        id: "backend",

        number: "03",

        title: "Backend & Database",

        description: "Technologies I am using to understand APIs, servers and data storage.",

        skills: [{
                name: "Node.js",

                note: "JavaScript server runtime",

                status: "learning",
            },

            {
                name: "Express.js",

                note: "API routes and server logic",

                status: "learning",
            },




            {
                name: "MySQL",

                note: "SQL queries and relational data",

                status: "working",
            },


        ],
    },

    {
        id: "tools",

        number: "04",

        title: "Data & Developer Tools",

        description: "Libraries and tools that support my development and analysis workflow.",

        skills: [{
                name: "Git & GitHub",

                note: "Version control and repositories",

                status: "working",
            },

            {
                name: "VS Code",

                note: "Primary development environment",

                status: "working",
            },



            {
                name: "NumPy & Pandas",

                note: "Python data processing",

                status: "working",
            },

            {
                name: "Matplotlib",

                note: "Data visualization",

                status: "working",
            },


        ],
    },
];


export const computerScienceFoundations = [{
        number: "01",

        title: "Data Structures & Algorithms",

        description: "Arrays, strings, stacks, queues, recursion, searching and problem-solving practice.",
    },

    {
        number: "02",

        title: "Object-Oriented Programming",

        description: "Classes, objects, inheritance, encapsulation, abstraction and polymorphism.",
    },

    {
        number: "03",

        title: "Database Management Systems",

        description: "Relational design, SQL queries, normalization and database fundamentals.",
    },

    {
        number: "04",

        title: "Operating Systems",

        description: "Processes, memory management, scheduling and core operating-system concepts.",
    },

    {
        number: "05",

        title: "Computer Networks",

        description: "OSI and TCP/IP models, protocols, routing and network fundamentals.",
    },
];


export const learningFocus = [{
        title: "React Development",

        description: "Improving component architecture, state management and routing through projects.",
    },

    {
        title: "Backend Development",

        description: "Learning server logic, API development and database integration.",
    },

    {
        title: "C++ & DSA Practice",

        description: "Strengthening problem solving through regular data-structure and algorithm practice.",
    },
];


export const portfolioProjects = [{
        id: "01",

        key: "sourcecode-ai",

        title: "SourceCode AI",

        type: "Final-Year College Project",

        status: "In Development",

        tone: "active",

        visual: "security",

        featured: true,

        summary: "An AI-powered source-code review and vulnerability detection platform developed as my college final-year project.",

        progressNote: "The complete frontend is ready. Part of the backend has been implemented, and the remaining backend work is actively in progress.",

        technologies: [
            "React",
            "Vite",
            "Python",
            "FastAPI",
        ],

        stages: [{
                label: "Frontend",
                state: "complete",
            },
            {
                label: "Backend",
                state: "active",
            },
            {
                label: "Final Integration",
                state: "upcoming",
            },
        ],

        pipelineLabel: "Backend in progress",
    },

    {
        id: "02",

        key: "expense-tracker",

        title: "Expense Tracker",

        type: "Personal Web Project",

        status: "Frontend Complete",

        tone: "complete",

        visual: "expense",

        featured: false,

        summary: "A responsive expense-management interface designed to help users record, organise and understand their spending.",

        progressNote: "The frontend is complete. The interface and feature set may still change as the project develops further.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
        ],

        stages: [{
                label: "Frontend",
                state: "complete",
            },
            {
                label: "Enhancement Review",
                state: "active",
            },
            {
                label: "Next Version",
                state: "upcoming",
            },
        ],

        pipelineLabel: "Frontend ready",
    },

    {
        id: "03",

        key: "advanced-calculator",

        title: "Advanced Calculator",

        type: "Project Upgrade",

        status: "Upgrade Planned",

        tone: "planning",

        visual: "calculator",

        featured: false,

        summary: "My existing calculator project is being re-imagined as a more advanced and useful real-world calculation tool.",

        progressNote: "The base calculator exists, and the plan for its advanced version is currently being prepared before development begins.",

        technologies: [
            "JavaScript",
            "UI/UX",
            "Advanced Logic",
        ],

        stages: [{
                label: "Base Build",
                state: "complete",
            },
            {
                label: "Advanced Plan",
                state: "active",
            },
            {
                label: "Development",
                state: "upcoming",
            },
        ],

        pipelineLabel: "Upgrade planning",
    },

    {
        id: "04",

        key: "ai-chatbot",

        title: "AI Chatbot",

        type: "Upcoming Project",

        status: "Upcoming",

        tone: "upcoming",

        visual: "chatbot",

        featured: false,

        summary: "An upcoming AI-powered chatbot planned as a future project with a complete conversational user experience.",

        progressNote: "This project is currently in the upcoming stage and will move into development after the present roadmap progresses.",

        technologies: [
            "AI Integration",
            "Frontend",
            "Backend",
        ],

        stages: [{
                label: "Concept",
                state: "active",
            },
            {
                label: "Interface",
                state: "upcoming",
            },
            {
                label: "AI Integration",
                state: "upcoming",
            },
        ],

        pipelineLabel: "Up next",
    },
];


export const internshipExperiences = [{
        id: "01",

        key: "ibm-skillsbuild",

        company: "IBM ",

        initials: "IBM",

        role: "Full-Stack Development Intern",

        programme: "Virtual Internship Programme",

        period: "2025 • 4 Weeks",

        status: "Industry Learning",

        tone: "program",

        visual: "ibm",

        description: "A four-week virtual learning experience focused on artificial intelligence, machine learning and cloud technology through the IBM SkillsBuild ecosystem.",


        highlights: [
            "Built responsive frontend interfaces using HTML, CSS , JavaScript and react",
            "Explored backend development, APIs ",
            "Understood how frontend and backend  connect in a full-stack application",
        ],


        technologies: [
            "full-Stack",
            "Development",
            "IBM SkillsBuild",
        ],

        credential: "Four-week virtual learning programme and 2 days physical workshop",

        credentialAwarded: false,
    },

    {
        id: "02",

        key: "future-interns",

        company: "Future Interns",

        initials: "FI",

        role: "Full Stack Web Development Intern",

        programme: "Web Development Internship",

        period: "08 Jul — 08 Aug 2025",

        status: "Completed",

        tone: "completed",

        visual: "future",

        description: "Completed assigned development tasks and project submissions in a full-stack web-development internship focused on practical delivery and documentation.",

        highlights: [
            "Completed the assigned internship development tasks",
            "Submitted project work and supporting documentation",
            "Received completion recognition and recommendation",
        ],

        technologies: [
            "Full-Stack Web",
            "Project Tasks",
            "Documentation",
        ],

        credential: "Certificate of Completion + Letter of Recommendation",

        credentialAwarded: true,

        certificateUrl: publicAsset(
            "certificates/futureIntern-certificate.png"
        ),
    },

    {
        id: "03",

        key: "codealpha",

        company: "CodeAlpha",

        initials: "CA",

        role: "Frontend Development Intern",

        programme: "Frontend Development Internship",

        period: "10 Aug — 10 Sep 2025",

        status: "Completed",

        tone: "completed",

        visual: "codealpha",

        description: "Completed frontend-development tasks, maintained the work through GitHub repositories and published project output through GitHub Pages.",

        highlights: [
            "Completed and submitted frontend-development tasks",
            "Used GitHub repositories for project delivery",
            "Published work and received completion recognition",
        ],

        technologies: [
            "Frontend",
            "GitHub",
            "GitHub Pages",
        ],

        credential: "Internship Certificate + Letter of Recommendation",

        credentialAwarded: true,

        certificateUrl: publicAsset(
            "certificates/codeAlpha-certificate.png"
        ),
    },

    {
        id: "04",

        key: "agnirath-rover-drone",

        company: "Agnirath Aerospace & Defence Research Pvt. Ltd.",

        initials: "AD",

        role: "Rover Drone Development",

        programme: "Aerospace & Defence Internship",

        period: "Rover Drone Project",

        status: "Project Experience",

        tone: "project",

        visual: "agnirath",

        description: "Worked on a Rover Drone project involving a hybrid ground-and-aerial mobility concept at Agnirath Aerospace & Defence Research Pvt. Ltd.",

        highlights: [
            "Contributed to the Rover Drone development workflow",
            "Explored system design and hardware-integration concepts",
            "Worked with real-time control and autonomous-feature ideas",
        ],

        technologies: [
            "Rover Drone",
            "System Design",
            "Real-Time Control",
        ],

        credential: "Internship certificate available",

        credentialAwarded: true,

        certificateUrl: publicAsset(
            "certificates/agnirath-certificate.jpeg"
        ),
    },
];