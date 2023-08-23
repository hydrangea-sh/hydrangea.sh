import Clamp from "@/components/Clamp"

import GitHub from "@/icons/GitHub"
import Website from "@/icons/Website"

import Portfolio from "@/assets/portfolio.webp"
import Todo from "@/assets/todo.webp"
import Discord from "@/assets/discord.webp"
import Weather from "@/assets/weather.webp"

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
        description: "A Discord bot that converts music links between Spotify, Apple Music, YouTube Music, and Amazon Music, enabling platform-agnostic music sharing within a server.",
        image: Discord,
        technologies: ["Discord.js", "Node", "TypeScript"],
        repo: "https://github.com/hydrangea-sh/song-bot/",
        website: undefined
    },
    {
        name: "Todo-App",
        description: "An experimental hypermedia-driven todo application using bleeding-edge web technologies.",
        image: Todo,
        technologies: ["Bun", "Elysia", "Turso", "htmx", "Drizzle", "SQLite", "TypeScript", "Docker", "Fly.io"],
        repo: "https://github.com/hydrangea-sh/todo-app/",
        website: "https://hydrangea-todo.fly.dev/"
    },
    {
        name: "Weather-Widget",
        description: "A simple weather application.",
        image: Weather,
        technologies: ["Angular", "Typescript", "OpenWeatherMap API"],
        repo: "https://github.com/hydrangea-sh/Angular-Weather-App/",
        website: "https://hydrangea.sh/"
    },
    {
        name: "Hydrangea.sh",
        description: "My personal website.",
        image: Portfolio,
        technologies: ["HTML", "SCSS", "Vite", "React", "TypeScript"],
        repo: "https://github.com/hydrangea-sh/hydrangea.sh/",
        website: "https://hydrangea.sh/"
    }
]

const Projects = () => {
    return (
        <Clamp className="Projects">
        <h3 id="#projects">Project <span>Garden</span></h3>
        <p className="Subtitle">Some things I've made</p>
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