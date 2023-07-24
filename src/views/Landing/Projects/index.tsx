import Clamp from "@/components/Clamp"

import GitHub from "@/icons/GitHub"
import Website from "@/icons/Website"

import "./Projects.scss"

//still need images for the projects....

export interface Project {
    name: string
    description: string
    image?: string //here!!!!!
    technologies: string[]
    repo: string
    website?: string
}

export const SpotlightProjectItems: Project[] = [
    {
        name: "Song-Bot",
        description: "A  Discord bot for seamless song sharing regardless of music platform preference.",
        image: "temp",
        technologies: ["Discord.js", "Node", "TypeScript"],
        repo: "https://github.com/hydrangea-sh/song-bot/",
        website: undefined
    },
    {
        name: "Todo-App",
        description: "An experimental hypermedia-driven todo application using bleeding-edge web technologies.",
        image: "temp",
        technologies: ["Bun", "Elysia", "Turso", "htmx", "Drizzle", "SQLite", "TypeScript", "Docker", "Fly.io"],
        repo: "https://github.com/hydrangea-sh/todo-app/",
        website: "https://hydrangea-todo.fly.dev/"
    },
    {
        name: "Hydrangea.sh",
        description: "My personal website.",
        image: "temp",
        technologies: ["HTML", "SCSS", "Vite", "React", "TypeScript"],
        repo: "https://github.com/hydrangea-sh/hydrangea.sh/",
        website: "https://hydrangea.sh/"
    }
]

const Projects = () => {
    return (
        <Clamp className="Projects">
        <h3 id="#projects">Project <span>Spotlight</span></h3>
        <p className="Subtitle">Some of the stuff I"ve created</p>
        <div className="ProjectArea">
          {SpotlightProjectItems.map((item) => (
            <div className="ProjectItem" key={item.name}>
              <div className="Text">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <div className="Technologies">
                  {item.technologies.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <div className="Links">
                  {item.repo ? <a href={item.repo} className="Github" target="_blank">
                    <GitHub />
                  </a> : null}
                  {item.website ? <a href={item.website} className="LinkTo" target="_blank">
                    <Website />
                  </a> : null}
                </div>
              </div>
              <div className="Image">
                <a href={item.website ?? item.repo} target={item.website ?? "_blank"}>
                  <img src={item.image} alt={item.name} draggable="false" />
                </a>
              </div>
            </div>
          ))}
        </div>
    </Clamp>
    )
}

export default Projects