import Image from "next/image";
import { Mulish } from "next/font/google";
import style from "./Styles/techIcon.module.css";

const mulish = Mulish({ subsets: ["latin"] });

interface title {
  name: string;
}

export default function TechIcon(title: title) {
  return (
    <text className={mulish.className + " " + style.techIcon}>
      {title.name}
    </text>
  );
}
