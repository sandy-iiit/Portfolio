//
// // Import necessary modules
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
// import { useSpring, animated } from 'react-spring';
// import Image from "next/image";
// import Link from "next/link";
//
// const HeroContent = () => {
//     const phrases = ["Full Stack Developer", "Backend Developer", "Frontend Developer", "DevOps Learner"];
//     const [index, setIndex] = useState(0);
//
//     // Function to rotate phrases
//     const rotatePhrases = () => {
//         setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     };
//
//     // Use useEffect to rotate phrases every 2 seconds
//     useEffect(() => {
//         const interval = setInterval(rotatePhrases, 4000);
//         return () => clearInterval(interval);
//     }, []);
//
//     // React Spring animation for text
//     const props = useSpring({
//         to: { opacity: 1 },
//         from: { opacity: 0 },
//         reset: true,
//     });
//
//     return (
//         <motion.div
//             initial="hidden"
//             animate="visible"
//             className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
//         >
//             <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
//                 <motion.div
//                     variants={slideInFromTop}
//                     className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
//                 >
//                     <SparklesIcon className={"text-[#b49bff] mr-[10px] h-5 w-5"} />
//                     <h1 className={"Welcome-text text-[13px]"}>Portfolio of Datta Sandeep</h1>
//                 </motion.div>
//
//                 <motion.div
//                     variants={slideInFromLeft(0.8)}
//                     className={"gap-6 mt-6 flex flex-col text-5xl text-bold text-white max-w-[600px] w-auto h-auto"}
//                 >
//                     <animated.div style={props}>Passionate</animated.div>
//                 </motion.div>
//                 <motion.div
//                     variants={slideInFromLeft(0.8)}
//                     className={"gap-6 flex flex-col text-5xl font-bold text-white max-w-[600px] w-auto h-auto"}
//                 >
//                     <animated.span
//                         style={props}
//                         className={"text-transparent mt-1 mb-1 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"}
//                     >
//                         {phrases[index]}
//                     </animated.span>
//                 </motion.div>
//                 <motion.div
//                     variants={slideInFromLeft(0.8)}
//                     className={"gap-6 flex flex-col text-5xl text-bold text-white max-w-[1000px] w-auto h-auto"}
//                 >
//                     <animated.div style={props}>and ML Enthusiast</animated.div>
//                 </motion.div>
//
//                 <motion.p
//                     variants={slideInFromLeft(0.8)}
//                     className={"text-lg text-gray-400 my-5 max-w-[600px]"}
//                 >
//                     Welcome to my portfolio! I am a full stack developer skilled in frontend technologies like React, Angular, and Next.js, and backend technologies such as Spring Boot, Node.js, and Django. I specialize in building scalable microservices and have experience with databases like MongoDB, MySQL, and PostgreSQL. Explore my projects to see my work in action!
//                 </motion.p>
//
//                 <motion.p
//                     variants={slideInFromLeft(1)}
//                     className={"py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"}
//                 >
//                     <Link href="https://drive.google.com/file/d/1BVrPSg9T-K1huHbbYQqPL8VsXiSSkWww/view?usp=sharing" passHref>
//                         Resume!
//                     </Link>
//                 </motion.p>
//             </div>
//             <motion.div
//                 variants={slideInFromRight(0.8)}
//                 className={"w-full h-full flex justify-center items-center"}
//             >
//                 <Image
//                     src={"/mainIconsdark.svg"}
//                     alt={"work icons"}
//                     height={650}
//                     width={650}
//                 />
//             </motion.div>
//         </motion.div>
//     );
// };
//
// // Wrap your component with useClient to mark it as a Client Component
// export default HeroContent;

// Import necessary modules
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { useSpring, animated } from 'react-spring';
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
    const phrases = ["Full Stack Developer", "Backend Developer", "Frontend Developer", "DevOps Enthusiast","Cloud Developer"];
    const [index, setIndex] = useState(0);

    // Function to rotate phrases
    const rotatePhrases = () => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    // Use useEffect to rotate phrases every 4 seconds
    useEffect(() => {
        const interval = setInterval(rotatePhrases, 2000);
        return () => clearInterval(interval);
    }, []);

    // React Spring animation for text
    const dynamicPhraseProps = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
    });

    const staticProps = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
    });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className={"text-[#b49bff] mr-[10px] h-5 w-5"} />
                    <h1 className={"Welcome-text text-[13px]"}>Portfolio of Datta Sandeep</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className={"gap-6 mt-6 flex flex-col text-5xl text-bold text-white max-w-[600px] w-auto h-auto"}
                >
                    <animated.div style={staticProps}>Passionate</animated.div>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className={"gap-6 flex flex-col text-5xl font-bold text-white max-w-[600px] w-auto h-auto"}
                >
                    <animated.span
                        style={dynamicPhraseProps}
                        className={"text-transparent mt-1 mb-1 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"}
                    >
                        {phrases[index]}
                    </animated.span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className={"gap-6 flex flex-col text-5xl text-bold text-white max-w-[1000px] w-auto h-auto"}
                >
                    <animated.div style={staticProps}>and ML Enthusiast</animated.div>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className={"text-lg text-gray-400 my-5 max-w-[600px]"}
                >
                    Welcome to my portfolio! I am a full stack developer skilled in frontend technologies like React, Angular, and Next.js, and backend technologies such as Spring Boot, Node.js, and Django. I specialize in building scalable microservices and have experience with databases like MongoDB, MySQL, and PostgreSQL. Explore my projects to see my work in action!
                </motion.p>

                <motion.p
                    variants={slideInFromLeft(1)}
                    className={"py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"}
                >
                    <Link href="https://drive.google.com/file/d/1mFf5zQwrCpyF7U4WPBX4xBlYuvp-3874/view?usp=sharing" passHref>
                        Resume!
                    </Link>
                </motion.p>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className={"w-full h-full flex justify-center items-center"}
            >
                <Image
                    src={"/mainIconsdark.svg"}
                    alt={"work icons"}
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

// Wrap your component with useClient to mark it as a Client Component
export default HeroContent;
