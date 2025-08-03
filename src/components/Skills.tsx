import SkillsSection from "./SkillsSection.tsx";

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="skills-header animate-on-scroll">
                    <h2 className="section-title">
                        My <span className="highlight">Skills</span>
                    </h2>
                </div>

                <p className="skills-description animate-on-scroll">
                    I’m Harsha Dilan, a results-driven Full-Stack Developer experienced in building scalable web apps using technologies like React, Node.js, MongoDB, and Spring Boot. I enjoy building full-cycle solutions that solve real problems.
                </p>

                <div className="skills-container">
                    <SkillsSection />
                </div>
            </div>
        </section>
    )
}

export default Skills