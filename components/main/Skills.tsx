import React from "react"
import {Backend_skill, DevOps, Frontend_skill, Other_skill, Skill_data} from "@/constants";
import SkillDataProvider from "@/components/sub/SkillDataProvider";
import SkillText from "@/components/sub/SkillText";

const Skills=()=>{
    return(
        <section
        id={"skills"}
        className={"flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"}
        style={{transform:"scale(0.9)"}}
        >
            <SkillText/>
            <div className={"flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"}>
                {
                    Backend_skill.map((data,index)=>(
                        <SkillDataProvider key={index} src={data.Image} width={data.width} height={data.height} index={index}/>
                    ))
                }
            </div>

            <div className={"flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"}>
                {
                    Frontend_skill.map((data,index)=>(
                        <SkillDataProvider key={index} src={data.Image} width={data.width} height={data.height} index={index}/>
                    ))
                }
            </div>

            <div className={"flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"}>
                {
                    DevOps.map((data,index)=>(
                        <SkillDataProvider key={index} src={data.Image} width={data.width} height={data.height} index={index}/>
                    ))
                }
            </div>

            <div className={"flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"}>
                {
                    Other_skill.map((data,index)=>(
                        <SkillDataProvider key={index} src={data.Image} width={data.width} height={data.height} index={index}/>
                    ))
                }
            </div>


            <div className={"mt-20 w-full h-full absolute"}>
                <div className={"w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover"}>
                    <video
                    className={"w-full h-auto"}
                    prefix={"false"}
                    playsInline
                    loop
                    muted
                    autoPlay
                    src={"/cards-video.webm"}
                    />
                </div>
            </div>

        </section>
    )
}
export default Skills
