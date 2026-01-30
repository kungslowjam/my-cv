import {
    Camera,
    Wifi,
    BarChart3,
    Bot,
    Cpu,
    Leaf,
    Mail,
    Phone,
    MapPin,
    Youtube,
    GraduationCap,
    Droplets,
    Wind,
} from "lucide-react"
import profilePic from "../pic/Gemini_Generated_Image_y3b6cyy3b6cyy3b6.png"
import plcPic from "../pic/PLC.png"
import simPic from "../pic/sim.png"
import scss1 from "../pic/SCSS-1.png"
import scss2 from "../pic/SCSS-2.png"
import scss3 from "../pic/SCSS-3.png"
import kuLogo from "../pic/KU_Logo.png"
import flindersLogo from "../pic/Flinders.png"

export type ProjectMedia =
    | { type: "image"; src: any; alt: string }
    | { type: "video"; src: string; alt: string }
    | { type: "youtube"; src: string; alt: string }

export type Project = {
    title: string
    year: string
    description: string
    icon: any
    tags: string[]
    media?: ProjectMedia[]
}

export const projects: Project[] = [
    {
        title: "Pedestrian Crossing Detection Using Artificial Intelligence Control",
        year: "2025",
        description:
            "Designed a smart crossing system with real-time human detection and compact CV pipeline. Integrated YOLOv10 with PLC-based traffic control for enhanced pedestrian safety.",
        icon: Camera,
        tags: ["YOLOv10", "PLC", "Real-time", "Project Leader"],
        media: [
            { type: "image", src: scss1, alt: "Smart crossing system layout diagram" },
            { type: "image", src: scss2, alt: "Smart Crosswalk Safety System UI screenshot" },
            { type: "image", src: scss3, alt: "AI detection dashboard output" },
        ],
    },
    {
        title: "Smart Wildlife Monitoring and Alert System Using LoRa and Edge ML",
        year: "2024",
        description:
            "Built real-time monitoring and community alert features for wildlife conservation. Meshtastic-based LoRa monitoring system with custom firmware and web dashboard.",
        icon: Wifi,
        tags: ["LoRa", "Meshtastic", "IoT", "Edge ML", "Project Lead"],
        media: [
            { type: "youtube", src: "https://www.youtube.com/shorts/UKSZIHqBG-M", alt: "Short demo of Wildlife IoT sensor mesh" },
            { type: "youtube", src: "https://www.youtube.com/shorts/9iMkv0wZYNY", alt: "Field test of Wildlife IoT alert workflow" },
        ],
    },
    {
        title: "Coffee Husk Carbon Briquette Production",
        year: "2022",
        description:
            "Developed a pilot process for manufacturing high-quality carbon briquettes from coffee husk waste to provide cleaner cooking fuel and boost rural incomes.",
        icon: Leaf,
        tags: ["Bioenergy", "Circular Economy", "Sustainability"],
        media: [
            { type: "image", src: "/projects/coffee-banner.png", alt: "Coffee husk carbon briquette outreach poster" },
            { type: "image", src: "/projects/coffee-kiln.png", alt: "TISTR prototype kiln design" },
            { type: "image", src: "/projects/coffee-feedstock.png", alt: "Coffee husk feedstock comparison" },
        ],
    },
    {
        title: "PLC & Cloud SCADA Pump Control System",
        year: "2022",
        description:
            "Enhanced water distribution efficiency by optimizing PLC logic and Cloud SCADA integration. Implemented flowrate-based control for automated pump operation, reducing water wastage.",
        icon: Droplets,
        tags: ["PLC", "SCADA", "Cloud IoT", "Automation"],
        media: [{ type: "image", src: plcPic, alt: "PLC and SCADA system interface" }],
    },
    {
        title: "Vertical Axis Wind Turbine (VAWT) Design & Simulation",
        year: "2022",
        description:
            "Reverse-engineered a vertical axis wind turbine prototype to create high-fidelity 3D models. Performed CFD and dynamic simulations in SolidWorks to analyze power generation efficiency at 3-5 m/s wind speeds.",
        icon: Wind,
        tags: ["SolidWorks", "Simulation", "Renewable Energy", "CAD"],
        media: [{ type: "image", src: simPic, alt: "Wind turbine simulation results in SolidWorks" }],
    },
    {
        title: "Weed-Killing Agricultural Robot",
        year: "2018",
        description:
            "Autonomous robot using Faster R-CNN (Inception V2) for precision weed detection. Received TGI x INNOMAC ACCEL Startup Grant (400,000 THB).",
        icon: Bot,
        tags: ["Faster R-CNN", "Robotics", "Agriculture", "Grant Winner"],
        media: [
            { type: "image", src: "/projects/Thesis-1.png", alt: "Weed-killing robot CAD assembly diagram" },
            { type: "image", src: "/projects/Thesis-2.png", alt: "Weed-killing robot electronics overview" },
            { type: "youtube", src: "https://www.youtube.com/watch?v=2grcjVSEPCs", alt: "Robot field test footage 1" },
            { type: "youtube", src: "https://www.youtube.com/watch?v=87SX1dxFfIA", alt: "Robot field test footage 2" },
        ],
    },
]

export const education = [
    {
        degree: "Master of Computer Science (Artificial Intelligence)",
        institution: "Flinders University, Adelaide, Australia",
        year: "2025 – 2026",
        logo: flindersLogo,
        highlights: [
            "Royal Thai Government (OCSC) Scholarship",
            "Full Scholarship pathway for MSc & PhD in AI and Robotics",
            "Expected Completion: December 2026",
            "Current GPA: 6.12 / 7.00",
        ],
        current: true,
    },
    {
        degree: "Bachelor of Engineering (Mechanical Engineering)",
        institution: "Kasetsart University, Bangkok, Thailand",
        year: "2015 – 2018",
        logo: kuLogo,
        highlights: [
            "GPA: 3.10 / 4.00",
            "Thesis: Weed-Killing Robot – mobile robot spraying herbicide with object detection in cassava farms",
            "Developed autonomous prototype using Faster R-CNN Inception V2 on Raspberry Pi",
            "Received TGI x INNOMAC ACCEL Startup Grant (400,000 THB)",
            "Achieved 84.67% accuracy during real-time indoor trials",
        ],
        current: false,
    },
]

export const experiences = [
    {
        title: "Research Assistant",
        company: "TISTR",
        period: "2022 — Present",
        description: "AI/vision systems for automation & environment. Coordincated multi-stakeholder research proposals. Leading Pedestrian AI & Wildlife Monitoring projects.",
        current: true,
    },
    {
        title: "Process Improvement Engineer",
        company: "Inoue Rubber (Thailand)",
        period: "Mar 2019 — Jan 2022",
        description: "Lean manufacturing, root cause analysis, and SOP creation to optimize rubber product manufacturing.",
        current: false,
    },
    {
        title: "Machine Vision Engineer",
        company: "Robot System",
        period: "Apr 2018 — Mar 2019",
        description: "Integrated 3D vision (Gocator) with robotic grinding systems. Performed real-world coordinate calibration.",
        current: false,
    },
]

export const skillCategories = [
    {
        category: "AI / Computer Vision",
        skills: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLOv10", "Faster R-CNN", "Data Mining", "Neural Networks"],
    },
    {
        category: "Embedded / IoT",
        skills: ["Arduino", "ESP32", "STM32", "LoRa", "Meshtastic", "MQTT", "Jetson", "Raspberry Pi"],
    },
    {
        category: "Robotics",
        skills: ["PLC (Omron, Mitsubishi)", "ROS", "Isaac Sim", "Motion Control", "Sensor Fusion", "Gocator 3D"],
    },
    {
        category: "Mechanical",
        skills: ["SolidWorks", "Fusion 360", "CAD/CAM", "3D Printing"],
    },
    {
        category: "Web / Software",
        skills: ["React", "Next.js", "Node-RED", "FastAPI", "PostgreSQL", "Docker"],
    },
]

export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
]

export const contactInfo = [
    {
        icon: Mail,
        label: "Email (Academic)",
        value: "auth0004@flinders.edu.au",
        href: "mailto:auth0004@flinders.edu.au",
    },
    {
        icon: Mail,
        label: "Email (TISTR)",
        value: "kodnatthaphat@tistr.or.th",
        href: "mailto:kodnatthaphat@tistr.or.th",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "0428-542-6125",
        href: "tel:+61428542612",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Adelaide, Australia",
        href: null,
    },
    {
        icon: Youtube,
        label: "YouTube",
        value: "KodeMind",
        href: "https://youtube.com/@KodeMind",
    },
]

export const about = {
    paragraphs: [
        <>
            Royal Thai Government (OCSC) Scholar currently completing a{" "}
            <span className="font-medium text-foreground" suppressHydrationWarning>Master of Computer Science (AI)</span> at Flinders University,
            serving as a Research Assistant at TISTR, and planning to pursue a PhD focused on applied robotics.
        </>,
        "I build field-ready AI/robotics systems spanning computer vision, embedded devices, and environmental sensing. My work focuses on smart mobility, wildlife protection, and environmental intelligence.",
        "With a background in mechanical engineering and hands-on experience in industrial automation, I bridge the gap between theoretical AI research and practical robotic deployments in challenging real-world environments.",
    ],
    resumeUrl: "/cv.pdf", // Placeholder
}

export const siteMetadata = {
    title: "Kodnatthaphat Authaianurak | AI & Robotics Researcher",
    description:
        "Building AI-driven robotic systems, computer vision pipelines, and IoT networks for real-world field applications.",
    siteUrl: "https://kodmind.com", // Placeholder
}

export const heroData = {
    name: "Kodnatthaphat Authaianurak",
    role: "AI & Robotics Researcher",
    avatarUrl: profilePic,
    scholarship: "OCSC Scholar",
    description:
        "Building AI-driven robotic systems, computer vision pipelines, and IoT networks for real-world field applications.",
    actions: {
        primary: { label: "View Projects", href: "#projects" },
        secondary: { label: "Download CV", href: "/cv.pdf" },
        tertiary: { label: "Contact", href: "#contact" },
    },
}

export const researchInterests = [
    { name: "Autonomous Robotics", icon: "Sparkles" },
    { name: "Computer Vision", icon: "Eye" },
    { name: "Edge Intelligence & IoT", icon: "Cpu" },
    { name: "Smart Agriculture", icon: "Sprout" },
    { name: "Human–Robot Collaboration", icon: "Users" },
]

export const sideProjects = [
    {
        title: "EleBull – Edge AI Dashboard",
        description:
            "Desktop dashboard built with Flet (Flutter for Python) to monitor TPU metrics, trigger inference pipelines, and visualize EleBull IoT sensor events in real time.",
        link: "https://github.com/kungslowjam/EleBull_Flet",
        youtube: "https://youtube.com/@KodeMind",
        stack: ["Flet", "Python", "Edge TPU", "Realtime UI"],
        image: {
            src: "/projects/side-1.png",
            alt: "EleBull edge AI dashboard preview",
        },
    },
    {
        title: "EleBull – Hailo RPi5 Toolkit",
        description:
            "Experimented with Hailo-8 on Raspberry Pi 5, creating scripts to deploy EleBull detection models, monitor accelerator health, and push telemetry to the main dashboard.",
        link: "https://github.com/kungslowjam/hailo-rpi5-elebull",
        youtube: "https://youtube.com/@KodeMind",
        stack: ["Hailo-8", "Raspberry Pi 5", "Python", "DevOps"],
        image: {
            src: "/projects/side-2.png",
            alt: "Hailo RPi5 EleBull toolkit wiring",
        },
    },
]

export const footerData = {
    copyrightName: "Kodnatthaphat Authaianurak",
}
