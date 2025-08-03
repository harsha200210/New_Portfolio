import ProjectCard from "./ProjectCard.tsx";

const projects = [
    {
        title: "Gym Website",
        description: "A dynamic and responsive web application designed for gym management. Built with Spring Boot on the backend, it offers a seamless experience for both gym administrators and members.",
        image: "src/assets/projects/Gym_Management.png",
        link: "https://github.com/harsha200210/Workout_Plan_Generator.git",
    },
    {
        title: "Smart Parking Management",
        description: "A scalable and intelligent parking solution built with Spring Boot microservices architecture. This system automates the process of locating, booking, and managing parking spaces in real time.",
        image: "src/assets/projects/Smart_Parking_Management.jpg",
        link: "https://github.com/harsha200210/Smart_Parking_Management_System.git",
    },
    {
        title: "BookClub Library Management",
        description: "A full-stack web application designed to manage readers, books, and lending activities for modern libraries. Built with the MERN stack, the system streamlines library operations and enhances user engagement.",
        image: "src/assets/projects/Library-Management-System.webp",
        link: "https://github.com/harsha200210/Book_Club_Library_Management.git",
    },
    {
        title: "Ecommerce Website",
        description: "A dynamic online shopping platform developed using Java Server Pages (JSP) and Servlets, designed to simulate a real-world e-commerce experience with user-friendly navigation and secure transactions.",
        image: "src/assets/projects/e_Commerce.webp",
        link: "https://github.com/harsha200210/Ecommerce.git",
    },
    {
        title: "The Culinary Academy Management",
        description: "A comprehensive desktop application developed as part of the ORM (Object-Relational Mapping) coursework using JavaFX for the UI and Hibernate for seamless database interaction",
        image: "src/assets/projects/The Culinary Academy Management.jpg",
        link: "https://github.com/harsha200210/The-Culinary-Academy-Management.git",
    },
    {
        title: "Laptop Shop Management",
        description: "A desktop-based application developed as part of Object-Oriented Programming (OOP) coursework to manage the operations of a laptop retail shop. Built using Java and integrated with MySQL for persistent data storage.",
        image: "src/assets/projects/Laptop_Shop_Management.jpg",
        link: "https://github.com/harsha200210/Laptop_Shop_Management.git",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="projects-header animate-on-scroll">
                    <h2 className="section-title">
                        My <span className="highlight">Projects</span>
                    </h2>
                    <p className="projects-description">
                        I'm Harsha Dilan, a passionate and results-driven FullStack Developer with a strong foundation
                    </p>
                </div>

                <div className="projects-divider animate-on-scroll"></div>

                <div className="projects-container animate-on-scroll">
                    {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    {/*</div>*/}
                    {/*/!* First Project - GYM *!/*/}
                    {/*<div className="project-card">*/}
                    {/*    <div className="project-content">*/}
                    {/*        <div className="project-header">*/}
                    {/*            <h3 className="project-title">GYM</h3>*/}
                    {/*            <div className="project-link">*/}
                    {/*                <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">*/}
                    {/*                    <path*/}
                    {/*                        strokeLinecap="round"*/}
                    {/*                        strokeLinejoin="round"*/}
                    {/*                        strokeWidth={2}*/}
                    {/*                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
                    {/*                    />*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <p className="project-text">*/}
                    {/*            a passionate and results-driven FullStack Developer with a strong foundation*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <img*/}
                    {/*        src={test}*/}
                    {/*        alt="GYM Project"*/}
                    {/*        className="project-image"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*/!* Second Project - COATS GYM (Orange) *!/*/}
                    {/*<div className="project-card featured">*/}
                    {/*    <div className="project-content">*/}
                    {/*        <div className="project-header">*/}
                    {/*            <h3 className="project-title">COATS GYM</h3>*/}
                    {/*            <div className="project-link">*/}
                    {/*                <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">*/}
                    {/*                    <path*/}
                    {/*                        strokeLinecap="round"*/}
                    {/*                        strokeLinejoin="round"*/}
                    {/*                        strokeWidth={2}*/}
                    {/*                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
                    {/*                    />*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <p className="project-text">*/}
                    {/*            I'm Harsha Dilan, a passionate and results-driven FullStack Developer with a strong foundation*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <img*/}
                    {/*        src="https://via.placeholder.com/280x200/333333/ffffff?text=COATS+GYM"*/}
                    {/*        alt="COATS GYM Project"*/}
                    {/*        className="project-image"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*/!* Third Project - COATS GYM *!/*/}
                    {/*<div className="project-card">*/}
                    {/*    <div className="project-content">*/}
                    {/*        <div className="project-header">*/}
                    {/*            <h3 className="project-title">COATS GYM</h3>*/}
                    {/*            <div className="project-link">*/}
                    {/*                <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">*/}
                    {/*                    <path*/}
                    {/*                        strokeLinecap="round"*/}
                    {/*                        strokeLinejoin="round"*/}
                    {/*                        strokeWidth={2}*/}
                    {/*                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
                    {/*                    />*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <p className="project-text">*/}
                    {/*            I'm Harsha Dilan, a passionate and results-driven FullStack Developer with a strong foundation*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <img*/}
                    {/*        src="https://via.placeholder.com/280x200/333333/ffffff?text=COATS+GYM"*/}
                    {/*        alt="COATS GYM Project"*/}
                    {/*        className="project-image"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*/!* Fourth Project - COATS GYM *!/*/}
                    {/*<div className="project-card">*/}
                    {/*    <div className="project-content">*/}
                    {/*        <div className="project-header">*/}
                    {/*            <h3 className="project-title">COATS GYM</h3>*/}
                    {/*            <div className="project-link">*/}
                    {/*                <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">*/}
                    {/*                    <path*/}
                    {/*                        strokeLinecap="round"*/}
                    {/*                        strokeLinejoin="round"*/}
                    {/*                        strokeWidth={2}*/}
                    {/*                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
                    {/*                    />*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <p className="project-text">*/}
                    {/*            I'm Harsha Dilan, a passionate and results-driven FullStack Developer with a strong foundation*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <img*/}
                    {/*        src="https://via.placeholder.com/280x200/333333/ffffff?text=COATS+GYM"*/}
                    {/*        alt="COATS GYM Project"*/}
                    {/*        className="project-image"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*/!* Fifth Project - CO... (Partially visible) *!/*/}
                    {/*<div className="project-card">*/}
                    {/*    <div className="project-content">*/}
                    {/*        <div className="project-header">*/}
                    {/*            <h3 className="project-title">CO...</h3>*/}
                    {/*            <div className="project-link">*/}
                    {/*                <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">*/}
                    {/*                    <path*/}
                    {/*                        strokeLinecap="round"*/}
                    {/*                        strokeLinejoin="round"*/}
                    {/*                        strokeWidth={2}*/}
                    {/*                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
                    {/*                    />*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <p className="project-text">*/}
                    {/*            I'm Harsha Dilan, a passionate and results-driven FullStack Developer with a strong foundation*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <img*/}
                    {/*        src="https://via.placeholder.com/280x200/333333/ffffff?text=Project"*/}
                    {/*        alt="Project"*/}
                    {/*        className="project-image"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

export default Projects