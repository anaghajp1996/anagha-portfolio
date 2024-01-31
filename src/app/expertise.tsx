/* eslint-disable react/jsx-key */
import style from "./Styles/expertise.module.css";
import { Mulish } from "next/font/google";
import TechIcon from "./techIcon";
import "./Constants";
import { technologyUsed } from "./Constants";
import Work from "./work";

const mulish = Mulish({ subsets: ["latin"] });

export default function Expertise() {
  return (
    <div
      id="expertise"
      className={mulish.className}
      style={{
        padding: "16px 160px",
        margin: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        boxSizing: "border-box",
      }}
    >
      <text className={style.heading}>Some of my work!</text>
      <Work
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7143332405519482881?compact=1"
        title="The Snake Game"
        description="Created a seamless user engagement by precisely controlling the snake's movement and path manoeuvring. "
        subTitle="A captivating iOS-based recreation of the iconic Snake game."
        techUsed={["SwiftUI", "Swift", "Core Animation"]}
      ></Work>
      <Work
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7133255164643201024?compact=1"
        title="Ripples"
        description="Created a fun UI experience in creating ripples as a way of learning animations and user gestures."
        subTitle="An explorative SwiftUI that creates ripples on tap."
        techUsed={["SwiftUI", "Swift", "Core Animation"]}
      ></Work>
    </div>
  );
}
