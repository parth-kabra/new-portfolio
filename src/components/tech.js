import { cpp, css, firebase, flask, git, github, html, javascript, nextjs, python, reactjs, tailwind, vercel } from "@/constants.js/assets";
import styles from "@/constants.js/styles";
import Image from "next/image";

function TechComponent({name, image}){
    return (
        <div className="flex my-1 items-center justify-center w-[80px] h-[80px] rounded-full border border-[#262626c0] bg-[#151515c0]">
            <Image
                alt={name}
                height="40"
                src={image}
                style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                    
                }}
                width="40"
            />
        </div>
    )
}

function TechsComponent({techsArray, techType}){
    return(
        <div className="flex flex-col items-center justify-center p-4 sm:p-8">
            {techsArray.map((tech, index)=>{
                return (
                    <TechComponent name={tech.id} image={tech.icon} />
                )
            })}
        </div>
    )
}

export default function Tech() {
    const frontendTechs_1 = [
        { id: "HTML 5",    icon: html },
        { id: "CSS 3",     icon: css },
        { id: "Tailwind",  icon: tailwind },
    ];

    const frontendTechs_2 = [
        { id: "JavaScript",icon: javascript },
        { id: "React JS",  icon: reactjs },
        { id: "Next JS",   icon: nextjs }
    ]
    
    const backendTechs = [
        { id: "Python 3",  icon: python },
        { id: "Flask",     icon: flask },
        { id: "Git",       icon: git },
    ];
    
    const toolsTechs = [
        { id: "GitHub",    icon: github },
        { id: "Firebase",  icon: firebase },
        { id: "Vercel",    icon: vercel }
    ];
    return (
        <section id="tech" className="w-full relative bg-black py-10">
            <div className="blur-box w-[100px] absolute h-[100px]"></div>
            <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
                <div className="space-y-4 md:space-y-6">
                    <div className="space-y-3">
                    <h2 className={styles.subheading}>My Tech Stack</h2>
                    <p className={`mx-auto max-w-[700px] text-gray-500 ${styles.paragraph}`}>
                        A collection of technologies I work with on a daily basis.
                    </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-sm items-center row-gap-10 sm:max-w-none sm:grid-cols-3 sm:items-center sm:row-gap-0 lg:max-w-none lg:grid-cols-4 lg:row-gap-0">
                    <TechsComponent techsArray={frontendTechs_1} techType={"Frontend"}/>
                    <TechsComponent techsArray={frontendTechs_2} techType={"."}/>
                    <TechsComponent techsArray={backendTechs} techType={"Backend"}/>
                    <TechsComponent techsArray={toolsTechs} techType={"Frontend"}/>
                </div>
            </div>
        </section>
    )
  }
  
  