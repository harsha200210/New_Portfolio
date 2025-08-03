import aboutImage from '../assets/about_image.jpg'

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container about-grid">
                <div className="about-image-container animate-on-scroll">
                    <div className="about-image-bg"></div>
                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage}
                            alt="Harsha Dilan About"
                            className="about-image"
                            width="400"
                            height="500"
                        />
                    </div>
                </div>

                <div className="animate-on-scroll">
                    <h2 className="section-title">
                        About <span className="highlight">Me</span>
                    </h2>

                    <p className="about-text">
                        I'm Harsha Dilan, a dedicated and aspiring Full-Stack Developer currently pursuing my Diploma in Software Engineering at IJSE Panadura. I have a strong passion for building responsive web applications and solving real-world problems through technology.
                    </p>

                    <p className="about-text">
                        I have hands-on experience with technologies like JavaScript, TypeScript, React, Node.js, Express, and MongoDB, and I’m also familiar with frameworks like Next.js and Spring Boot. I enjoy working on both front-end and back-end development, and I'm always eager to learn and grow in fast-paced, collaborative environments.
                    </p>

                    <p className="about-text">
                        My goal is to become a well-rounded software engineer who can contribute to impactful projects and create seamless, scalable digital experiences. I'm also exploring tools like Docker and Git to strengthen my development workflow.
                    </p>

                    <div className="about-buttons">
                        <a href="mailto:harshadilanbb2020@gmail.com" >
                            <button className="btn btn-primary w-full">Hire Me</button>
                        </a>

                        <a href="/Harsha_Dilan_CV.pdf" download className="btn btn-outline flex items-center gap-2">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About