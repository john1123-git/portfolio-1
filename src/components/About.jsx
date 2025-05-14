import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
        <h3 style={{ textAlign: "justify" }}>
          👋 Hi! I am Midas King, a full stack developer with over a decade of
          experience steering software development.
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          💻I am now taking the leap into freelancing, eager to make the most of
          my expertise and deliver solutions that make a difference..
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          🎉 Throughout my career, I have rolled up my sleeves and worked
          hands-on with a variety of technologies, including Angular, React,
          Vue.js, Ruby on Rails, Node.js, and Django. My efforts have led to
          significant boosts in user engagement and enhanced operational
          efficiency.💥.
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          🧩 In my free time, I love to solve puzzles and brain teasers, which
          helps me stay sharp and keep my problem-solving skills on point. I am
          also a big fan of learning myths and legends from around the world 🌍,
          which gives me a glimpse into different cultures and traditions and
          that&apos;s why call me Midas
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          🙌My journey has allowed me to craft robust RESTful APIs, implement
          smooth CI/CD processes, and elevate application performance—all while
          collaborating with talented teams.
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          💪 With a solid foundation in Computer Science and an unwavering
          passion for innovation, I am excited to bring my skills to your
          projects and help drive your success.
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          🤝 Let’s create something amazing together!.
        </h3>
        <h3 style={{ textAlign: "justify" }}>
          🧠 I almost forgot. Lately, I&apos;ve been diving deep into AI,
          Automation and machine learning, exploring how intelligent solutions
          can improve software products, streamline workflows, and create
          smarter user experiences. I&apos;m passionate about integrating
          AI-based capabilities to create real value.
        </h3>
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, "about", "");
