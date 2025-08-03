import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';

type SkillCardProps = {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

const SkillCard: React.FC<SkillCardProps> = ({ number, title, description, icon }) => (
    <div className="skill-card-wrapper animate-on-scroll">
        <div className="skill-card bg-white shadow-md p-6 rounded-lg text-center">
            <div className="skill-number text-sm mb-2">#{number}</div>
            <div className="skill-logo-container text-3xl text-blue-500 mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="skill-description">{description}</p>
        </div>
    </div>
);

const SkillsSection: React.FC = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto">
            {/* Frontend */}
            <SkillCard
                number="01"
                title="React"
                description="Building interactive UIs and single-page apps with reusable components."
                icon={<FaReact />}
            />
            <SkillCard
                number="02"
                title="TypeScript"
                description="Strongly typed JavaScript for scalable and maintainable code."
                icon={<SiTypescript />}
            />
            <SkillCard
                number="03"
                title="Tailwind CSS"
                description="Utility-first CSS framework for fast UI development."
                icon={<SiTailwindcss />}
            />

            {/* Backend */}
            <SkillCard
                number="04"
                title="Node.js & Express"
                description="Backend development with RESTful APIs and server-side logic."
                icon={<FaNodeJs />}
            />
            <SkillCard
                number="05"
                title="Spring Boot"
                description="Java-based framework for building secure and production-ready backend services."
                icon={<SiSpringboot />}
            />

            {/* Database */}
            <SkillCard
                number="06"
                title="MongoDB"
                description="NoSQL database for flexible and fast data storage."
                icon={<SiMongodb />}
            />
            <SkillCard
                number="07"
                title="MySQL"
                description="Relational database for structured and reliable data handling."
                icon={<SiMysql />}
            />

            {/* Tools / DevOps */}
            <SkillCard
                number="08"
                title="Docker"
                description="Containerization for consistent development and deployment environments."
                icon={<FaDocker />}
            />
            <SkillCard
                number="09"
                title="Git & GitHub"
                description="Version control and collaboration on projects with distributed teams."
                icon={<FaGitAlt />}
            />
        </section>
    );
};

export default SkillsSection;
