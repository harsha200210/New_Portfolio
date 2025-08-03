import {useEffect, useState} from "react";
import harshaImg from '../assets/harsha.png';
import {FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube} from "react-icons/fa";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id="home" className="hero-section">
            <div className="container hero-grid">
                {/* Left Text */}
                <div className={`hero-left ${isVisible ? "" : "opacity-0"}`}>
                    <h1 className="hero-title">
                        My name is
                        <br />
                        <span className="highlight">Harsha Dilan</span>
                        <br />
                        and I am a
                        <br />
                        <span className="highlight">Software Engineering Student</span>
                    </h1>

                    <div className="social-icons flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/harsha.dilan.7106?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon facebook text-blue-600">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="mailto:harshadilanbb2020@gmail.com" className="social-icon email text-red-500">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="https://youtube.com/@harshadilan462?si=7f5l3Fnn3yhPgYYh" target="_blank" rel="noopener noreferrer" className="social-icon youtube text-red-600">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/harsha-dilan-2b852527a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon linkedin text-blue-500">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://github.com/harsha200210" target="_blank" rel="noopener noreferrer" className="social-icon github text-gray-800">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    <p className="social-text">Find Me In Social Meadia</p>
                </div>

                {/* Center Image */}
                <div className={`hero-center ${isVisible ? "" : "opacity-0"}`}>
                    <div className="hero-image-container">
                        <div className="hero-image-bg"></div>
                        <img
                            src={harshaImg}
                            alt="Harsha Dilan"
                            className="hero-image"
                        />
                    </div>
                </div>

                {/* Right Text */}
                <div className={`hero-right ${isVisible ? "" : "opacity-0"}`}>
                    <p className="hero-description">
                        I'm Harsha Dilan, a passionate Full-Stack Developer skilled in building modern web applications using React,
                        Node.js, and MongoDB. I love creating clean, efficient, and user-focused digital experiences.
                    </p>

                    <div className="hero-buttons">
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

                    <div className="stats-container grid grid-cols-1 sm:grid-cols-3 gap-6 text-center my-10">
                        <div className="stat-card bg-white shadow-md p-6 rounded-lg">
                            <div className="stat-number text-3xl font-bold text-blue-600">100+</div>
                            <div className="stat-text mt-2 text-gray-700">Social Media Followers</div>
                        </div>
                        <div className="stat-card bg-white shadow-md p-6 rounded-lg">
                            <div className="stat-number text-3xl font-bold text-green-600">155+</div>
                            <div className="stat-text mt-2 text-gray-700">GitHub Contributions</div>
                        </div>
                        <div className="stat-card bg-white shadow-md p-6 rounded-lg">
                            <div className="stat-number text-3xl font-bold text-purple-600">2500+</div>
                            <div className="stat-text mt-2 text-gray-700">Lines of Code Written</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero