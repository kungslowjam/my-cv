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
import scss4 from "../pic/SCSS-4.png"
import kuLogo from "../pic/KU_Logo.png"
import flindersLogo from "../pic/Flinders.png"
import kilinPic from "../pic/kilin.png"

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
        title: "Pedestrian Crossing Detection with AI-Controlled PLC Traffic System (Jetson Industrial Orin)",
        year: "2025",
        description:
            "Designed a smart pedestrian crossing system with real-time human detection and an edge-friendly CV pipeline deployed on NVIDIA Jetson Industrial Orin. Integrated YOLOv10 with PLC-based traffic-light control to improve crossing safety and response time. Project funding: THB 560,000.",
        icon: Camera,
        tags: ["YOLOv10", "PLC", "Jetson Orin", "Real-time", "Project Leader"],
        media: [
            { type: "image", src: scss1, alt: "Smart crossing system layout diagram" },
            { type: "image", src: scss2, alt: "Smart Crosswalk Safety System UI screenshot" },
            { type: "image", src: scss3, alt: "AI detection dashboard output" },
            { type: "image", src: scss4, alt: "Smart crossing system demonstration" },
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
            { type: "image", src: kilinPic, alt: "Kiln operation process" },
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
            { type: "youtube", src: "https://www.youtube.com/watch?v=87SX1dxFfIA", alt: "Robot field test footage 1" },
            { type: "youtube", src: "https://www.youtube.com/watch?v=2grcjVSEPCs", alt: "Robot field test footage 2" },
        ],
    },
    {
        title: "Robotic Plasma Cutting System for Gas Cylinders",
        year: "2018",
        description:
            "Developed and integrated a robotic plasma cutting system specifically designed for cutting the base of cooking gas cylinders.",
        icon: Bot,
        tags: ["Robotics", "Plasma Cutting", "Automation", "Manufacturing"],
        media: [
            { type: "youtube", src: "https://youtube.com/shorts/MmRyXz4pvY8?si=YLZyjBBuJcuFFzVO", alt: "Robotic plasma cutting system in action" },
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
        skills: ["C++", "LVGL", "Arduino", "ESP32", "STM32", "LoRa", "Meshtastic", "MQTT", "Jetson", "Raspberry Pi"],
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
            Royal Thai Government (OCSC) Scholar completing an{" "}
            <span className="font-medium text-foreground">MCS (AI)</span> at Flinders University (expected Dec 2026)
            and Research Assistant at TISTR.
        </>,
        "I am preparing for a PhD in applied robotics within my scholarship scope of Computer Science/IT, with broad interests across mechatronics, AI-enabled systems, data-driven methods, and real-world deployment. Fully funded by OCSC; eligible for additional university/top-up scholarships where permitted (non-bonded, subject to approval).",
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
        title: "Isaac Robot Teleoperation",
        description:
            "Real-time teleoperation of robots in NVIDIA Isaac Sim using MediaPipe. Features low-latency control of dual robot arms and grippers through webcam-based human pose tracking with stable multiprocessing.",
        link: "https://github.com/kungslowjam/ros2-isaac",
        youtube: "https://youtube.com/shorts/McDKHZ3tSj0",
        stack: ["Isaac Sim", "MediaPipe", "Python", "USD"],
        image: {
            src: "https://img.youtube.com/vi/McDKHZ3tSj0/0.jpg",
            alt: "Isaac Robot Teleoperation demo",
        },
    },
    {
        title: "DeskBit – Desktop Companion Robot",
        description:
            "Cute desktop companion device with 1.43\" round AMOLED display powered by ESP32-S3. Features animated robot eyes, Pomodoro timer, and a web-based Robot Face Studio for designing custom eye expressions and animations.",
        link: "https://github.com/kungslowjam/deskbit",
        youtube: "https://www.youtube.com/watch?v=HIJs3vWXdCQ",
        stack: ["ESP32-S3", "LVGL", "C++", "Python", "Web Editor"],
        image: {
            src: "/projects/deskbit.png",
            alt: "DeskBit desktop companion robot with round AMOLED display",
        },
    },
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
