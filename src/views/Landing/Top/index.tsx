import Clamp from "@/components/Clamp"

import LinkedIn from "@/icons/LinkedIn"
import GitHub from "@/icons/GitHub"
import Discord from "@/icons/Discord"

import "./Top.scss"

const Top = () => {
    return (
        <Clamp className="Top">
            <div className="Hero">
                <div className="Text">
                    <p className="HelloWorld">Hello World!</p>
                    <h1>Heyo, I'm <span className="Accent">Hydrangea</span></h1>
                    <h1 className="Dimmed">I make things</h1>
                    <p className="ShortAbout">I'm software developer based in Chicago, Illinois. I specialize in developing high-quality, user-friendly websites and applications.</p>
                    <div className="Socials">
                    <a href="https://www.linkedin.com/in/hydrangea-sh/" className="LinkedIn" target="_blank"><LinkedIn /></a>
                    <a href="https://github.com/hydrangea-sh" className="GitHub" target="_blank"><GitHub /></a>
                    <a href="https://discord.com/users/70905440065560576" className="Discord" target="_blank"><Discord /></a>
                    </div>
                </div>
            </div>
        </Clamp>
    )
}


export default Top