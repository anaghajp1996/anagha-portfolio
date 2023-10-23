import Image from "next/image";
import { Mulish } from "next/font/google";
import style from "./Styles/techIcon.module.css"

const mulish = Mulish({subsets: ['latin']});

export default function TechIcon({title}) {
    return (
        <text className={mulish.className + ' ' + style.techIcon}>{title}</text>
    );
}