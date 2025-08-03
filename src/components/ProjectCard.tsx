import React from "react";

export type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="project-card flex flex-col justify-between relative">
            <div className="project-content">
                <div className="project-header flex items-center justify-between gap-2">
                    <h3 className="project-title">{title}</h3>
                    <div className="project-link shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300">
                        <a href={link}>
                            <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="project-text">{description}</p>
            </div>

            <img
                src={image}
                alt={title + " Project"}
                className="project-image mt-auto"
            />
        </div>
    );
};

export default ProjectCard;
