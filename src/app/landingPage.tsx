"use client";
import Image from "next/image";
import style from "./Styles/landingPage.module.css";
import Link from "next/link";
import AboutMe from "./aboutMe/page";

export default function LandingPage() {
  return (
    <div
      style={{
        height: "100%",
        padding: "16px 160px",
        display: "flex",
        alignContent: "center",
      }}
    >
      <div className={style.home} style={{ display: "flex" }}>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            top: "0px",
          }}
        >
          <text className={style.firstName}>Anagha</text>
          <text className={style.lastName}>Jayaprakash</text>
          <div style={{ height: "16px" }}></div>
          <text className={style.title}>SOFTWARE ENGINEER</text>
          <Link href="/aboutMe" className={style.button}>
            About Me
          </Link>
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
