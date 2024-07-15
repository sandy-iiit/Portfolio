// import Image from "next/image";
// import React from "react";
// import {SparklesIcon} from "@heroicons/react/24/solid";
// import {motion} from "framer-motion";
// import {slideInFromLeft} from "@/utils/motion";
//
// interface Props {
//     src: string;
//     title: string;
//     description: string;
// }
//
// const ProjectCard = ({ src, title, description,link }: Props) => {
//     return (
//         <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
//             <Image
//                 src={src}
//                 alt={title}
//                 width={1000}
//                 height={1000}
//                 className="w-full object-contain"
//             />
//
//             <div className="relative p-4">
//                 <h1 className="text-2xl font-semibold text-white">{title}</h1>
//                 <p className="mt-2 text-gray-300">{description}</p>
//             </div>
//
//         </div>
//     );
// };
//
// export default ProjectCard;
//
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { useRouter } from 'next/router';


interface Props {
    src: string;
    title: string;
    description: string;
    link: string; // Add a link prop for the external URL
}

const ProjectCard = ({ src, title, description, link}: Props) => {


    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform transform hover:scale-115 cursor-pointer">
            <Link href={link} passHref>

            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>

            </Link>
        </div>
    );
};

export default ProjectCard;
