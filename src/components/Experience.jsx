import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", color: "white", fontSize: "24px", fontWeight: "bold" }}>
          {experience.icon ? (
            <img src={experience.icon} alt={experience.company_name} style={{ width: "60%", height: "60%", objectFit: "contain" }} />
          ) : (
            <span>{experience.company_name.charAt(0)}</span>
          )}
        </div>
      }
    >
      <div>
        <h3 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>{experience.title}</h3>
        <p style={{ color: "var(--secondary)", fontSize: "16px", fontWeight: "600", margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul style={{ marginTop: "20px", listStyleType: "disc", marginLeft: "20px" }}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} style={{ color: "var(--white-100)", fontSize: "14px", paddingLeft: "4px", letterSpacing: "1px" }}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="work" className="section-padding" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px", textAlign: "center" }}>
          What I have done so far
        </p>
        <h2 style={{ color: "white", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Work Experience.</h2>
      </motion.div>

      <div style={{ marginTop: "80px", display: "flex", flexDirection: "column" }}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
