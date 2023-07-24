import About from "./About"
import Top from "./Top"
import Projects from "./Projects"

import "./Landing.scss"


const Landing = () => {
    return (
        <div className="Landing">
            <Top />
            <Projects />
            <About />
        </div>
    )
}


export default Landing