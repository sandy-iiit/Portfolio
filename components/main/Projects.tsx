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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                <ProjectCard
                    src="/microservices.png"
                    title="MicroServices using Springboot,Eureka,Zipkins"
                    description="This is a currency conversion micro-services app which is developed on the lines of circuit breaker resiliency pattern."
                    link="https://github.com/sandy-iiit/Spring-microservices-Eureka-Zipkins"

                />
                <ProjectCard
                    src="/microservices2.png"
                    title="Inventory management microservice app using Java,Springboot,Grafana Loki,Prometheus,Kafka"
                    description="This is an inventory management microservice application which uses Grafana Loki,Prometheus for monitoring the microservices and Kafka for the sending notifications through notification service. "
                    link="https://github.com/sandy-iiit/Microservices-Prometheus-Zipkins-Kafka"

                />
                <ProjectCard
                    src="/portfolio.png"
                    title="Portfolio App using NextJS Framer motion Tailwind CSS"
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
                    src="/webrtc.png"
                    title="ReactReal-Time Communication Backend with Go,Fiber and WebRTC"
                    description="This is an video chat application which uses webrtc,sockets along with the fiber framework of golang."
                    link="https://github.com/sandy-iiit/Go-WebRTC-app"

                />
                {/*<ProjectCard*/}
                {/*    src="/Food-Ordering-App.png"*/}
                {/*    title="Food-Ordering-App using React"*/}
                {/*    description="A simple food ordering app interface developed using React."*/}
                {/*    link="https://github.com/sandy-iiit/FoorOrderApp-React"*/}

                {/*/>*/}
            </div>

        </div>
    );
};

export default Projects;
