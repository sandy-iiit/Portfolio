import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Experience = () => {
    return (
        <div className="flex flex-col items-center py-20 z-[100]" id="experience">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Internship Experience
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                {/* Centering the ProjectCard */}
                <div className="col-start-2 col-span-1">
                    <ProjectCard
                        src="/Zntrlhub.png"
                        title="Zntrlhub of Onceptual Business Solutions"
                        description="ZntrlHub is a unified marketing automation platform that helps you run personalized WhatsApp campaigns. Zntrlhub is aimed to reduce your Customer Acquisition Cost (CAC) by finding the Buyer-intent of your website visitors. Technical Skills used: Springboot, Java, React, NodeJS, AWS, Postgres Sql."
                        link="www.youtube.com"
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
