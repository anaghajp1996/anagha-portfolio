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
        paddingBottom: "120px",
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
        imageSrc="/Snake.png"
        postSrc="https://www.linkedin.com/posts/anaghakj_swiftui-gamedevelopment-swift-activity-7143332473588834304-wTeu?utm_source=share&utm_medium=member_desktop"
        width={150.0}
        height={279.6}
        title="The Snake Game"
        description="Created a seamless user engagement by precisely controlling the snake's movement and path manoeuvring. "
        subTitle="A captivating iOS-based recreation of the iconic Snake game."
        techUsed={["SwiftUI", "Swift", "Core Animation"]}
      ></Work>
      <Work
        imageSrc="/Ripples.png"
        postSrc="https://www.linkedin.com/posts/anaghakj_swiftui-swiftui-swift-activity-7133255250961973249-TEn6?utm_source=share&utm_medium=member_desktop"
        width={300}
        height={200}
        title="Ripples"
        description="Created a fun UI experience in creating ripples as a way of learning animations and user gestures."
        subTitle="An explorative SwiftUI that creates ripples on tap."
        techUsed={["SwiftUI", "Swift", "Core Animation"]}
      ></Work>
      <Work
        imageSrc="/TheScene.png"
        postSrc="https://www.thesceneny.com"
        width={150.0}
        height={279.6}
        title="The Scene NYC"
        description="Developed the iOS app from ground up, for a user base of over 12k, within 2 months."
        subTitle="An AI-driven personal concierge app."
        techUsed={[
          "SwiftUI",
          "Swift",
          "Core Animation",
          "Combine",
          "In-App Purchases",
          "Subscriptions",
        ]}
      ></Work>
      <Work
        imageSrc="/Dictionary.png"
        postSrc="https://github.com/anaghajp1996/MyDictionary"
        width={150.0}
        height={279.6}
        title="My Dictionary"
        description="A simple dictionary!"
        subTitle=""
        techUsed={["SwiftUI", "Swift", "Animation", "AVFoundation"]}
      ></Work>
    </div>
  );
}
