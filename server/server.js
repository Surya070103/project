const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const resume = {
  name: "Rahul",
  title: "Software Developer",
  email: "rahul@example.com",
  location: "Bangalore, India",
  summary:
    "Software developer based in Bangalore, India, with a B.Tech from RV University. Interested in building reliable, user-focused software and contributing across the development lifecycle.",
  skills: ["Software Development", "JavaScript", "React", "Node.js", "HTML", "CSS"],
  experience: [
    {
      role: "Software Developer",
      company: "Zoho",
      dates: "july 2023 to present",
      details:
        "Develop and maintain software features; understand requirements, write readable code, troubleshoot and fix defects, test changes, review code, and collaborate with teammates to deliver reliable products."
    }
  ],
  education: [
    {
      degree: "B.Tech",
      school: "RV University",
      dates: " aug2019 to jun 2023"
    }
  ]
};

app.get("/api/resume", (req, res) => {
  res.json(resume);
});

app.listen(port, () => {
  console.log(`Resume API running at http://localhost:${port}`);
});
