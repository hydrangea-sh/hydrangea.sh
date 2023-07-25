import About from "./About"
import Top from "./Top"
import Projects from "./Projects"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import "./Landing.scss"


const Landing = () => {

    const location = useLocation()
    useEffect(() => {
      if (!["#top", "#projects", "#about"].includes(location.hash)) return
  
      const elem = document.getElementById(location.hash)
      if (!elem) return
  
      const yOffet = -100
      const y = elem.getBoundingClientRect().top + window.scrollY + yOffet
  
      window.scrollTo({ top: y, behavior: "smooth" })
    }, [location.hash])

    return (
        <div className="Landing">
            <Top />
            <Projects />
            <About />
        </div>
    )
}


export default Landing