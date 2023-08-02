import Clamp from "@/components/Clamp"
import Profile from "@/assets/profile.webp"


import "./About.scss"

import Email from "@/icons/Email"
import LinkedIn from "@/icons/LinkedIn"
import GitHub from "@/icons/GitHub"
import Discord from "@/icons/Discord"

const About = () => {
    return (
    <Clamp className="About">
        <div className="Text">
            <h3 id="#about">About <span className="Accent">Me</span></h3>
            <p>Hey there!</p>
            <p>I'm <span className="Accent">Elizabeth</span> a software developer based in Chicago, Illinois. I specialize in developing high-quality, user-friendly websites and applications. When I'm not programming you'll find me reading One Piece, crafting video essays (coming soon), or exploring the city's food scene.</p>
            <p>As a kid, I had an obsession with playing modded Minecraft. This passion spiraled into learning Java, creating my own mods, and eventually starting my journey into learning other programming languages.</p>
            <p>I am continually crafting new side projects and tinkering with new web technologies. Feel free to reach out!</p>
            <div id="#contact" className="SocialDivider"><p>Contact Me</p></div>
            <div className="Socials">
                <a href="mailto:hello@hydrangea.sh" className="Mail Stroke"><Email /></a>
                <a href="https://www.linkedin.com/in/hydrangea-sh/" className="LinkedIn Fill" target="_blank"><LinkedIn /></a>
                <a href="https://github.com/hydrangea-sh" className="GitHub Fill" target="_blank"><GitHub /></a>
                <a href="https://discord.com/users/70905440065560576" className="Discord Fill" target="_blank"><Discord /></a>
            </div>
        </div>
        <div className="Icon">
            <img src={Profile} alt="Hydrangea" draggable="false" />
            <div className="Overlay"></div>
        </div>
    </Clamp>
    )
}


export default About