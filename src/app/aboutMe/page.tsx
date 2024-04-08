import Image from "next/image";
import style from "./aboutMe.module.css";
import { Mulish } from "next/font/google";
import ImageGallery from "./imageGallery";
import Header from "../header";
import Footer from "../footer";

const mulish = Mulish({ subsets: ["latin"] });

export default function AboutMe() {
  return (
    <div className={mulish.className} id="aboutMe" style={{}}>
      <Header home={"/"} expertise={"/#expertise"}></Header>
      <div
        style={{
          padding: "0px 64px",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <p className={style.heading}>About Me</p>
            <p className={style.text}>
              Welcome to my portfolio! I am a passionate mobile application
              developer with a specialization in{" "}
              <mark className={style.mark}>iOS and Flutter</mark> development. I
              thrive on building mobile apps from the ground up, ensuring a
              seamless blend of functionality and excellent UI/UX design. My
              expertise lies in converting intricate UI designs into
              meticulously crafted code, with a keen eye for detail.
            </p>
            <p className={style.text}>
              Beyond my professional endeavors, I have an interest in{" "}
              <mark className={style.mark}>
                cybersecurity, and web development,{" "}
              </mark>
              constantly seeking to enhance my skills in this dynamic field. I
              find joy in the process of creating{" "}
              <mark className={style.mark}>
                secure and user-friendly applications.
              </mark>
            </p>
            <p className={style.text}>
              {`In my downtime, I'm a culinary enthusiast who loves experimenting
              with flavors in the kitchen. Walking with my dog is a cherished
              routine, and I find solace in the pages of a good book - although`}
              <mark className={style.mark}>
                {" "}
                {` thrillers leave me a tad bit paranoid more often that I'd like
                to admit.`}
              </mark>{" "}
              {`I enjoy watching comedy and thriller shows,`}{" "}
              <mark className={style.mark}>
                {`in pursuit of a good laugh or a nervous chuckle.`}
              </mark>{" "}
              {`I also relish the opportunity to travel and explore new places.`}
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div>
              <Image
                src={"/Me.png"}
                width="385"
                height="456"
                style={{
                  clipPath: "circle()",
                }}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
        <ImageGallery></ImageGallery>
      </div>
      <Footer></Footer>
    </div>
  );
}
