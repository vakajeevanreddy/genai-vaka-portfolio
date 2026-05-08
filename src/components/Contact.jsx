import React, { useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "40px", flexWrap: "wrap-reverse" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: 1,
            backgroundColor: "rgba(16, 13, 37, 0.5)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            minWidth: "300px",
          }}
        >
          <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>
            Get in touch
          </p>
          <h2 style={{ color: "white", fontSize: "48px", fontWeight: "900", marginBottom: "32px" }}>
            Contact.
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <label style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  padding: "16px 24px",
                  borderRadius: "10px",
                  border: "none",
                  color: "white",
                  outline: "none",
                  fontWeight: "500",
                }}
                required
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  padding: "16px 24px",
                  borderRadius: "10px",
                  border: "none",
                  color: "white",
                  outline: "none",
                  fontWeight: "500",
                }}
                required
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  padding: "16px 24px",
                  borderRadius: "10px",
                  border: "none",
                  color: "white",
                  outline: "none",
                  fontWeight: "500",
                  resize: "none",
                }}
                required
              />
            </label>

            <button
              type="submit"
              style={{
                backgroundColor: "var(--accent)",
                padding: "16px 32px",
                borderRadius: "10px",
                border: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(145, 94, 255, 0.39)",
                transition: "0.3s",
                width: "fit-content",
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ flex: 1, minWidth: "300px", height: "550px", position: "relative" }}
        >
           <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
            <p style={{ color: "var(--secondary)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>
              Explore Networking
            </p>
            <h3 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>Global Impact.</h3>
          </div>
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

