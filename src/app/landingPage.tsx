import Image from "next/image";
import style from "./Styles/landingPage.module.css"

export default function LandingPage() {
    return (
        <div>
            <div className={style.home} style={{display: "flex"}}>
                <div style={{textAlign: "left", display: "flex", flexDirection: "column"}}>
                    <text className={style.firstName}>Anagha</text>
                    <text className={style.lastName}>Jayaprakash</text>
                    <div style={{height: '16px'}}></div>
                    <text className={style.title}>SOFTWARE ENGINEER</text>
                </div>
                <div className={style.aboutMeSection} style={{}}>
                    <Image className={style.profileImage} src={'/Memoji_Hi.png'} width={300} height={300} alt=""></Image>
                </div>
            </div>
        </div>
    );
}