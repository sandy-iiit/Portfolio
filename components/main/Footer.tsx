import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[100]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Dev</div>

                        <Link href={"https://github.com/sandy-iiit"} className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <Link href={"https://www.linkedin.com/in/dattasandeep-choragudi/"} className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <Link href={"mailto:dattasandeep000@gmail.com"} className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Get in Touch</span>
                        </Link>
                        <Link href={"https://drive.google.com/file/d/1BVrPSg9T-K1huHbbYQqPL8VsXiSSkWww/view"} className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Know about me</span>
                        </Link>
                        <Link href={"mailto:dattasandeep000@gmail.com"} className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">dattasandeep000@gmail.com</span>
                        </Link>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Datta Sandeep
                </div>
            </div>
        </div>
    )
}

export default Footer
