import Image from "next/image";
import { Open_Sans } from "next/font/google";
import style from "./Styles/techIcon.module.css"

const openSans = Open_Sans({subsets: ['latin']});

export default function TechIcon({title}) {
    return (
        <h4 className={openSans.className + ' ' + style.techIcon}>{title}</h4>
    );
}