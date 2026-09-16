require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Certification = require("../models/Certification");
const Profile = require("../models/Profile");

const projects = [
  {
    title: "Project One",
    description:
      "Placeholder description — swap this for a real project summary. Mention the problem it solves and your role.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/your-username/project-one",
    liveUrl: "",
    imageUrl: "",
    featured: true,
    order: 1,
  },
  {
    title: "Project Two",
    description: "Placeholder description for your second project.",
    techStack: ["React", "MongoDB"],
    githubUrl: "https://github.com/your-username/project-two",
    liveUrl: "",
    imageUrl: "",
    featured: false,
    order: 2,
  },
  {
    title: "Project Three",
    description: "Placeholder description for your third project.",
    techStack: ["Node.js", "Express"],
    githubUrl: "https://github.com/your-username/project-three",
    liveUrl: "",
    imageUrl: "",
    featured: false,
    order: 3,
  },
];

const skills = [
  { name: "JavaScript", category: "language", level: 80, order: 1 },
  { name: "React", category: "frontend", level: 75, order: 2 },
  { name: "Node.js", category: "backend", level: 70, order: 3 },
  { name: "Express", category: "backend", level: 70, order: 4 },
  { name: "MongoDB", category: "database", level: 65, order: 5 },
  { name: "Git", category: "tools", level: 75, order: 6 },
];

const certifications = [
  {
    title: "Placeholder Certification",
    issuer: "Issuing Organization",
    issueDate: new Date("2025-01-01"),
    credentialUrl: "",
    imageUrl: "",
    order: 1,
  },
];

const profile = {
  name: "Naitik",
  tagline: "Full-Stack Developer",
  intro:
    "Placeholder intro paragraph — a couple of sentences about who you are, what you build, and what you're looking for.",
  avatarUrl: "",
  resumeUrl: "",
  githubUrl: "https://github.com/your-username",
  githubQrUrl: "",
  academics: [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech, Computer Science & Engineering",
      detail: "CGPA 7.97",
      startYear: 2022,
      endYear: 2026,
    },
  ],
};

async function seed() {
  await connectDB();

  await Promise.all([
    Project.deleteMany({}),
    Skill.deleteMany({}),
    Certification.deleteMany({}),
    Profile.deleteMany({}),
  ]);

  await Project.insertMany(projects);
  await Skill.insertMany(skills);
  await Certification.insertMany(certifications);
  await Profile.create(profile);

  console.log("Seed complete: projects, skills, certifications, profile inserted.");
  await mongoose.connection.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
