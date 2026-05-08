import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} style={{ background: "var(--tertiary)", padding: "20px", borderRadius: "20px", width: "100%", height: "100%" }}>
        <div style={{ position: "relative", width: "100%", height: "230px" }}>
          <img src={image} alt="project_image" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />

          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "flex-end", margin: "12px" }}>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #434343 0%, #000000 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FaGithub color="white" size={20} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>{name}</h3>
          <p style={{ marginTop: "8px", color: "var(--secondary)", fontSize: "14px" }}>{description}</p>
        </div>

        <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} style={{ fontSize: "14px", color: "var(--accent)" }}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="work" className="section-padding" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>My work</p>
        <h2 style={{ color: "white", fontSize: "50px", fontWeight: "900" }}>Projects.</h2>
      </motion.div>

      <div style={{ width: "100%", display: "flex" }}>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginTop: "12px", color: "var(--secondary)", fontSize: "17px", maxWidth: "900px", lineHeight: "30px" }}
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
