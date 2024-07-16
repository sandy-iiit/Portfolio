import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-[40]"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-10">
                <ProjectCard
                    src="/microservices.png"
                    title="MicroServices using Springboot,Eureka,Zipkins"
                    description="This is a currency conversion micro-services app which is developed on the lines of circuit breaker design pattern.It is developed using"
                    link="https://github.com/sandy-iiit/Spring-microservices-Eureka-Zipkins"

                />
                <ProjectCard
                    src="/portfolio.png"
                    title="Portfolio App using NextJS Framer motion Tailwin CSS"
                    description="This app is developed using NextJS framework,Framer motion for animations along with three.js and Tailwind CSS."
                    link="https://github.com/sandy-iiit/EcommerceApp-Spring-Angular"

                />
                <ProjectCard
                    src="/Genesis.png"
                    title="Genesis Insurances"
                    description="Genesis insurance is an app which focuses on providing insurance services. It was developed using NodeJS, React, MongoDB, Redis, and Jest for testing."
                    link="https://genesis-react-1.vercel.app/"

                />
                <ProjectCard
                    src="/E-Commerce.png"
                    title="E-Commerce App using Springboot and AngularJS"
                    description="This app is developed using Springboot for backend, Angular:16 for frontend, and MySQL as the database."
                    link="https://github.com/sandy-iiit/EcommerceApp-Spring-Angular"

                />
                <ProjectCard
                    src="/Food-Ordering-App.png"
                    title="Food-Ordering-App using React"
                    description="A simple food ordering app interface developed using React."
                    link="https://github.com/sandy-iiit/FoorOrderApp-React"

                />
            </div>

        </div>
    );
};

export default Projects;
