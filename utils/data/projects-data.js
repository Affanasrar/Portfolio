export const projectsData = [
  {
    id: 1,
    name: "SHAMS Student Management System",
    description:
      "A coaching-institute management platform for student profiles, academic records, attendance, and operational dashboards. The project focuses on reducing manual record keeping and improving day-to-day data accuracy for administrators.",
    screenshot: "/image/screen.png",
    tools: ["TypeScript", "React", "Dashboard UX", "Student Records", "Attendance"],
    problem:
      "The institute relied on manual records for students, attendance, and academic tracking. This created slow reporting and avoidable data errors for administrators.",
    features: ["Student profiles", "Attendance tracking", "Academic records", "Admin dashboard"],
    architecture:
      "A dashboard-first application organized around role-based admin workflows and data-backed student record management.",
    role: "Full Stack Developer",
    code: "https://github.com/Affanasrar/shams-sms",
    demo: "",
  },
  {
    id: 2,
    name: "SHU Carpool Web App",
    description:
      "A web-based ride-sharing platform that connects users traveling on similar routes. It includes ride listing, user interaction, and navigation flows built around the real-world problem of reducing travel cost and improving route efficiency.",
    screenshot: "/image/travel.jpg",
    tools: ["JavaScript", "HTML", "CSS", "Ride Sharing", "Maps Flow"],
    problem:
      "Students needed a simple way to share rides along similar routes so they could reduce travel cost and coordinate trips more efficiently.",
    features: ["Ride listings", "Route-based discovery", "User interaction", "Simple navigation flow"],
    architecture:
      "A lightweight front-end flow centered on route discovery, trip coordination, and fast user interaction.",
    role: "Full Stack Developer",
    code: "https://github.com/Affanasrar/SHU-Carpool-Web-app",
    demo: "",
  },
  {
    id: 3,
    name: "Car Rental Web Application",
    description:
      "A full-stack booking system where users reserve vehicles by selecting pickup location, pickup date, return date, car class, and renter status. The app is structured around clean booking decisions and database-backed reservations.",
    screenshot: "/image/real-estate.jpg",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    problem:
      "Vehicle booking needed a clean reservation flow that could capture dates, location, and renter status without confusing the user.",
    features: ["Reservation flow", "Pickup and return dates", "Car class selection", "Database-backed bookings"],
    architecture:
      "A full-stack booking system built around structured form inputs and persistent reservation storage.",
    role: "Full Stack Developer",
    code: "https://github.com/Affanasrar/car-rental-application",
    demo: "",
  },
  {
    id: 4,
    name: "AWS ECS Commerce Microservices",
    description:
      "A cloud-native e-commerce microservices deployment with a Next.js frontend, API gateway, backend services for catalog, cart, orders, payments, and notifications, plus AWS ECS Fargate deployment documentation.",
    screenshot: "/image/portfolio.gif",
    tools: ["AWS ECS", "Docker", "Terraform", "RDS", "Redis", "GitHub Actions"],
    problem:
      "The challenge was to demonstrate how a microservices e-commerce stack can be deployed cleanly on AWS with repeatable infrastructure.",
    features: ["API gateway", "Service split", "CI/CD", "ECS Fargate deployment"],
    architecture:
      "Microservices wired through AWS deployment infrastructure with containerized services and automation.",
    role: "Cloud Developer",
    code: "https://github.com/Affanasrar/ecs-commerce-demo",
    demo: "",
  },
  {
    id: 5,
    name: "Coolify PaaS Deployment on AWS",
    description:
      "A cloud computing project that deploys Coolify as a self-hosted PaaS on AWS and runs a demo SaaS app through GitHub-based deployment, monitoring, storage, SSL, and alerting infrastructure.",
    screenshot: "/image/crefin.jpg",
    tools: ["AWS EC2", "Coolify", "RDS", "S3", "CloudWatch", "Docker"],
    problem:
      "Deploying a self-hosted PaaS required dependable infrastructure, SSL, storage, and monitoring instead of a brittle one-off setup.",
    features: ["Self-hosted PaaS", "SSL and monitoring", "Storage and alerting", "GitHub deployment"],
    architecture:
      "An AWS-hosted deployment platform that combines container orchestration, persistence, and observability.",
    role: "Cloud Computing Student",
    code: "https://github.com/Affanasrar/aws-coolify-paas-deployment",
    demo: "",
  },
  {
    id: 6,
    name: "Toxic Comment Classification",
    description:
      "An NLP project using a fine-tuned transformer model to classify toxic comments. It reflects my interest in practical machine-learning workflows alongside full-stack and cloud development.",
    screenshot: "/image/ayla.jpg",
    tools: ["Python", "NLP", "Transformer Model", "Machine Learning"],
    problem:
      "Online comments needed automatic moderation so toxic content could be identified at scale without manual review.",
    features: ["Transformer-based classification", "NLP workflow", "Toxicity prediction", "Model experimentation"],
    architecture:
      "A machine-learning pipeline centered on text preprocessing, transformer fine-tuning, and prediction output.",
    role: "ML Developer",
    code: "https://github.com/Affanasrar/Toxic-Comment-Classification",
    demo: "",
  },
];
