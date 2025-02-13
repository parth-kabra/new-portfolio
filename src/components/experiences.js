import { logo, senior, craftivert } from "@/constants.js/assets"
import styles from "@/constants.js/styles"
import Image from "next/image"
import Link from "next/link"
import Contact from "./contact"
import { seniorLink, craftivertLink } from "@/constants.js/links"

function Experience({experience, id}){
    return (
        <>
        <div className={`p-3 m-2 project-card rounded-xl shaodw-lg  ${id == 0 ? "relative" : ""}`}>
            <div className={`${styles.alignCenter}`}>
                <Image src={experience.logo} className="w-[40px] shadow-md"/>
                {experience.link ?
                <Link alt={experience.title} className="underline" href={experience.link}>
                    <h1 className="text-xl mx-2">{experience.title}</h1>
                </Link>:
                <h1 alt={experience.title} className="text-xl mx-2">{experience.title}</h1>
                }
            </div>
            <p className="text-[#c6c6c6b3] text-[14px] my-1">
                {experience.time}
            </p>
            <p alt={experience.info} className="text-[#ffffffde] text-[17px] my-1">{experience.info}</p>
            {id == 0 ?
                <div className="blur-box absolute right-0 w-[100px] h-[100px] my-[-4px]"></div>
                :
                <></>    
            }

        </div>
        </>
    )
}

function Experiences(){
    const experiences = [
        {
            title: "Ask Senior",
            info: "At Ask Senior, I spearheaded full-stack development, crafting the entire site and implementing key features while also managing and optimizing the database for efficiency.",
            logo: senior,
            link: seniorLink,
            time: "Feb 2023 - May 2023"
        },
        {
            title: "Freelancer",
            info: "As a freelance web developer, I've crafted impressive projects for clients, enabling them to establish a strong online presence with custom-designed websites tailored to their needs.",
            logo: logo,
            time: "March 2023 - Present"
        },
        {
            title: "Craftivert",
            info: "(FREELANCED) I designed and developed Craftivert's website from scratch, handling both the visuals and functionality. I also built a custom authentication portal using Clerk.",
            logo: craftivert,
            time: "Jan 2025 - Jan 2025"
        },
    ];

    return (
        <>
            <section className="w-full p-3 bg-black" id="experiences">
                <div className="leading-[1.3] p-5 text-center">
                    <h1 alt="Journey Highlights" className={`${styles.subheading} text-blue`}>
                        Journey Highlights
                    </h1>
                    <p className={`text-[#ffffffb3] ${styles.paragraph} my-2`}>
                        In my web dev journey, I've thrived at startups with diverse projects.                    
                    </p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className={`grid gap-6 sm:gap-4 lg:grid-cols-2 xl:gap-8"`}>
                        {experiences.map((exp, ind) => (
                            <Experience experience={exp} id={ind} key={ind}/>
                        ))}
                    </div>
                </div>
                <br/>
                <br/>
            </section>
            <Contact />
        </>
    )
}

export default Experiences
