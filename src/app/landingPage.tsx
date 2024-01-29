import Image from "next/image";
import style from "./Styles/landingPage.module.css";

export default function LandingPage() {
  return (
    <div
      style={{
        height: "100%",
        margin: "0 60px",
        display: "flex",
        alignContent: "center",
      }}
    >
      <div
        className={style.home}
        style={{ display: "flex", paddingLeft: "15%", paddingRight: "15%" }}
      >
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <text className={style.firstName}>Anagha</text>
          <text className={style.lastName}>Jayaprakash</text>
          <div style={{ height: "16px" }}></div>
          <text className={style.title}>SOFTWARE ENGINEER</text>
        </div>
        <div className={style.images}>
          <Image
            className={style.codeScreenshot2}
            src={"/CodeScreenshot2.png"}
            width="300"
            height="200"
            alt=""
          ></Image>
          <Image
            className={style.codeScreenshot3}
            src={"/CodeScreenshot3.png"}
            width="300"
            height="200"
            alt=""
          ></Image>
          <Image
            className={style.profileImage}
            src={"/Memoji.png"}
            width={200}
            height={200}
            alt=""
          ></Image>
          <Image
            className={style.codeScreenshot}
            src={"/CodeScreenshot.png"}
            width="300"
            height="200"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}
