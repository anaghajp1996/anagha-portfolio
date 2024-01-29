import TechIcon from "./techIcon";
import style from "./Styles/work.module.css";

interface WorkProps {
  title: string;
  subTitle: string;
  description: string;
  techUsed: string[];
  src: string;
}

export default function Work(prop: WorkProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "16px",
        gap: "64px",
        boxShadow: "1px 1px 4px grey",
        borderRadius: "5px",
      }}
    >
      <iframe
        src={prop.src}
        height="249"
        width="300"
        allowFullScreen
        style={{ border: "none" }}
        title="Embedded post"
      ></iframe>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "32px",
          justifyContent: "start",
        }}
      >
        <text className={style.title}>{prop.title}</text>
        <text className={style.subTitle}>{prop.subTitle}</text>
        <text className={style.description}>{prop.description}</text>
        <div style={{ display: "flex", gap: "8px", paddingTop: "8px" }}>
          {prop.techUsed.map((tech) => {
            return <TechIcon key={tech} title={tech}></TechIcon>;
          })}
        </div>
      </div>
    </div>
  );
}
