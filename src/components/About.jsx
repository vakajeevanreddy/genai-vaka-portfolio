import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
      style={{
        width: "100%",
        background: "linear-gradient(135deg, var(--accent) 0%, #151030 100%)",
        padding: "1px",
        borderRadius: "20px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          background: "var(--tertiary)",
          borderRadius: "20px",
          padding: "30px 12px",
          minHeight: "280px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={icon} alt={title} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
        <h3 style={{ color: "white", fontSize: "20px", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>Overview</p>
        <h2 style={{ color: "white", fontSize: "50px", fontWeight: "900" }}>Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ color: "var(--secondary)", fontSize: "17px", maxWidth: "1000px", lineHeight: "30px", marginTop: "16px" }}
      >
        I'm a Python Developer and GenAI Engineer with 2+ years of experience building scalable backend systems and AI-powered applications. I specialize in FastAPI, REST API design, NLP pipelines, and LLM integrations that solve real business problems. Currently, I'm working as an AI Engineering Intern at Shyam Technologies, where I've built intelligent CRM platforms and NLP-driven workflows that reduce manual documentation by 60-70% and improve team productivity by 40%. My track record includes developing ML models with 87% accuracy, optimizing APIs to sub-2-second latency, and designing secure systems that process 500+ transactions monthly with 95% accuracy. I'm skilled in full-stack problem solving—from system design and database optimization to deployment using Docker and AWS—and I have hands-on experience with emerging tech like RAG systems, vector databases, and LangChain. I thrive on writing clean, maintainable code, collaborating with teams in Agile environments, and delivering measurable business impact. Whether it's designing ETL pipelines, implementing security best practices, or integrating cutting-edge AI into production systems, I bring both technical depth and a problem-solving mindset to every project.
      </motion.p>

      <div style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
