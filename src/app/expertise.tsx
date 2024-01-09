/* eslint-disable react/jsx-key */
import style from "./Styles/expertise.module.css"
import { Mulish } from "next/font/google"
import TechIcon from "./techIcon";
import "./Constants"
import { technologyUsed } from "./Constants";

const mulish = Mulish({subsets: ['latin']});

export default function Expertise() {
    return (
    <div id="expertise" className={mulish.className} style={{padding: "16px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "16px"}}>
        <text className={style.heading}>Some of my work!</text>
        <text className={style.subHeading}>In addition to have released over 4 applications in my previous role, I built a couple of projects aiming to explore and learn new topics. Check them out!</text>
        <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7143332405519482881?compact=1" height="399" width="450" allowFullScreen style={{border: "none"}} title="Embedded post"></iframe>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7133255164643201024?compact=1" height="399" width="450" allowFullScreen style={{border: "none"}} title="Embedded post"></iframe>
        </div>
    </div>);
}