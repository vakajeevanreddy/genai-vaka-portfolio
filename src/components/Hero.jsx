import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 40px 0 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {/* The Dot and Line Decoration */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--accent)" }} />
          <div
            style={{
              width: "4px",
              height: "320px",
              background: "linear-gradient(180deg, var(--accent) 0%, rgba(145, 94, 255, 0) 100%)",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ fontWeight: "900", color: "white", fontSize: "60px", marginTop: "8px" }}>
            Hi, I'm <span style={{ color: "var(--accent)" }}>Vaka Jeevan Reddy</span>
          </h1>
          <p style={{ color: "var(--white-100)", fontWeight: "500", fontSize: "18px", marginTop: "16px", maxWidth: "800px", lineHeight: "1.6" }}>
            Python Developer and GenAI Engineer with 2+ years of experience building scalable backend systems, REST
            APIs, AI-powered applications, and NLP-driven workflows. Strong expertise in FastAPI, LLM applications,
            RAG systems, LangChain, and machine learning. Proven impact across production systems with 87% model
            accuracy, 60–70% workflow automation improvement, sub-2-second API latency, and 40% backend performance
            optimization.
          </p>

          <div style={{ marginTop: "24px", display: "flex", gap: "20px" }}>
            <a
              href="/Vaka_Jeevan_Reddy_Resume.pdf"
              download
              style={{
                padding: "12px 24px",
                background: "var(--accent)",
                color: "white",
                borderRadius: "10px",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(145, 94, 255, 0.39)",
                display: "inline-block",
              }}
            >
              Download Resume
            </a>
          </div>

          <div style={{ marginTop: "40px", position: "relative", display: "inline-block" }}>
            <img
              src="profile.png"
              alt="Vaka Jeevan Reddy"
              style={{
                width: "400px",
                height: "450px",
                borderRadius: "20px",
                objectFit: "cover",
                border: "4px solid var(--accent)",
                boxShadow: "0 0 30px rgba(145, 94, 255, 0.5)",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "32px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="#about">
          <div
            style={{
              width: "35px",
              height: "64px",
              borderRadius: "20px",
              border: "4px solid var(--secondary)",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "8px",
            }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--secondary)", marginBottom: "4px" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
