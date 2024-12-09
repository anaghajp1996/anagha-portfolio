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
    <div className={style.work}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "32px",
          justifyContent: "start",
        }}
      >
        <Link
          href={prop.postSrc}
          className={style.title}
          passHref={true}
          target="_blank"
        >
          {prop.title}
        </Link>
        <text className={style.subTitle}>{prop.subTitle}</text>
        <text className={style.description}>{prop.description}</text>
        <div
          style={{
            display: "flex",
            gap: "12px",
            paddingTop: "24px",
          }}
        >
          {prop.techUsed.map((tech) => {
            return <TechIcon name={tech} key={tech}></TechIcon>;
          })}
        </div>
      </div>
      <div
        style={{  display: "flex", justifyContent: "center" }}
      >
        <Image
          src={prop.imageSrc}
          height={prop.height * 1.5}
          width={prop.width * 1.5}
          alt=""
        ></Image>
      </div>
    </div>
  );
}
