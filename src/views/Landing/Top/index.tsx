import Clamp from "@/components/Clamp"
import LinkedIn from "@/icons/LinkedIn"
import GitHub from "@/icons/GitHub"
import Discord from "@/icons/Discord"

import "./Top.scss"
import "@/global/breakpoints.scss"
import { useEffect, useState } from "react"

const Phrases: string[] = [
    "Arf! Arf! 🐶",
    "Woof! Woof! 🐾",
    "Bark! Bark! 🐕",
    "Hello, World! 🌎",
    "Lorem ipsum dolor sit amet",
    "404 Not Found :3",
    "I can haz cheeseburger?",
    "It's dangerous to go alone! Take this.",
    "I'm feeling lucky",
    "May the force be with you",
    "Keep calm and carry on",
    "One does not simply walk into Mordor",
    "So long, and thanks for all the fish",
    "Press F to pay respects",
    "Achievement Unlocked",
    "The cake is a lie",
    "GG EZ 🎮",
    "Poggers!",
    "What's up, Doc?",
    "Be right back, Internet 💻",
    "It's over 9000!",
    "There's no place like 127.0.0.1",
    "You shall not pass!",
    "To infinity... and beyond! 🚀",
    "Gotta catch 'em all!",
    "Would you kindly...",
    "It's not a bug, it's a feature! ✨",
    "Never gonna give you up",
    "BLÅHAJ-friendly 🦈💙",
    "Dark mode FTW ⚫️",
    "Hello, World!"
]

const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * Phrases.length);
    return Phrases[randomIndex];
}

const Top = () => {

    const [colorScheme, setColorScheme] = useState("dark");
    const randomPhrase = getRandomPhrase();

    const handleClick = () => {
        if (colorScheme === "dark") {
            setColorScheme("light");
        } else if (colorScheme === "light") {
            setColorScheme("blahaj");
        } else if (colorScheme === "blahaj") {
            setColorScheme("dark");
        }
    }

    useEffect(() => {
        // set CSS variables depending on the color scheme
        const root = document.documentElement;
        if (colorScheme === 'dark') {
            root.style.setProperty('--background-color', 'var(--background-color-dark)');
            root.style.setProperty('--scrollbar-color', 'var(--scrollbar-color-dark)');
            root.style.setProperty('--scrollbar-track-color', 'var(--scrollbar-track-color-dark)');
            root.style.setProperty('--accent-color', 'var(--accent-color-dark)');
            root.style.setProperty('--text-color', 'var(--text-color-dark)');
            root.style.setProperty('--text-dimmed', 'var(--text-dimmed-dark)');
            root.style.setProperty('--text-dimmed-more', 'var(--text-dimmed-more-dark)');
        } else if (colorScheme === 'blahaj') {
            root.style.setProperty('--background-color', 'var(--background-color-blahaj)');
            root.style.setProperty('--scrollbar-color', 'var(--scrollbar-color-blahaj)');
            root.style.setProperty('--scrollbar-track-color', 'var(--scrollbar-track-color-blahaj)');
            root.style.setProperty('--accent-color', 'var(--accent-color-blahaj)');
            root.style.setProperty('--text-color', 'var(--text-color-blahaj)');
            root.style.setProperty('--text-dimmed', 'var(--text-dimmed-blahaj)');
            root.style.setProperty('--text-dimmed-more', 'var(--text-dimmed-more-blahaj)');
        } else {
            root.style.setProperty('--background-color', 'var(--background-color-light)');
            root.style.setProperty('--scrollbar-color', 'var(--scrollbar-color-light)');
            root.style.setProperty('--scrollbar-track-color', 'var(--scrollbar-track-color-light)');
            root.style.setProperty('--accent-color', 'var(--accent-color-light)');
            root.style.setProperty('--text-color', 'var(--text-color-light)');
            root.style.setProperty('--text-dimmed', 'var(--text-dimmed-light)');
            root.style.setProperty('--text-dimmed-more', 'var(--text-dimmed-more-light)');
        }
    }, [colorScheme])

    return (
        <Clamp className={`Top ${colorScheme}`} id="#top">
            <div className="Hero">
                <div className="Text">
                    <p className="HelloWorld" onClick={handleClick}>{randomPhrase}</p>
                    <h1>Heyo, I'm <span className="Accent">Hydrangea</span></h1>
                    <h1 className="Dimmed">I make things</h1>
                    <p className="Mini">I'm software developer based in Chicago, Illinois. I specialize in developing high-quality, user-friendly websites and applications.</p>
                    <div className="Socials">
                    <a href="https://www.linkedin.com/in/hydrangea-sh/" className="LinkedIn" target="_blank"><LinkedIn /></a>
                    <a href="https://github.com/hydrangea-sh" className="GitHub" target="_blank"><GitHub /></a>
                    <a href="https://discord.com/users/70905440065560576" className="Discord" target="_blank"><Discord /></a>
                    </div>
                </div>
                <div className="Icon">
                    <img src="" alt="logo" draggable="false" />
                </div>
            </div>
        </Clamp>
    )
}

export default Top