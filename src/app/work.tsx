import TechIcon from "./techIcon";
import style from "./Styles/work.module.css";
import Link from "next/link";
import Image from "next/image";

interface WorkProps {
  title: string;
  subTitle: string;
  description: string;
  techUsed: string[];
  imageSrc: string;
  postSrc: string;
  height: number;
  width: number;
}

export default function Work(prop: WorkProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "16px",
        gap: "64px",
        boxShadow: "0px 0.5px 5px 0px rgba(63, 43, 185, 0.20);",
        borderRadius: "20px",
      }}
    >
      <div
        style={{ width: "300px", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={prop.imageSrc}
          height={prop.height}
          width={prop.width}
          alt=""
        ></Image>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "32px",
          justifyContent: "start",
        }}
      >
        <Link href={prop.postSrc} className={style.title}>
          {prop.title}
        </Link>
        <text className={style.subTitle}>{prop.subTitle}</text>
        <text className={style.description}>{prop.description}</text>
        <div style={{ display: "flex", gap: "8px", paddingTop: "8px" }}>
          {prop.techUsed.map((tech) => {
            return <TechIcon name={tech} key={tech}></TechIcon>;
          })}
        </div>
      </div>
    </div>
  );
}
