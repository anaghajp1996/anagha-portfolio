import { Open_Sans } from "next/font/google"
import Image from "next/image";
import style from "./page.module.css"
import Header from "./header";
import Footer from "./footer";
import Expertise from "./expertise";

const openSans = Open_Sans({subsets: ['latin']});

export default function Home() {
  return (
    <div id="home" className={openSans.className} style={{height: '100%'}}>
      <Header></Header>
      <div className={style.home} style={{display: 'flex', margin: '24px', alignItems: "center", height: "100%"}}>
        <div style={{textAlign: "center"}}>
          <h1>Anagha Jayaprakash</h1>
          <text style={{letterSpacing: '15px', color: '#182C61', fontWeight: 'bold', fontSize: '3vw'}}>SOFTWARE ENGINEER</text>
          <h4>Mobile Application Development | Web Development </h4>
        </div>
        <div className={style.aboutMeSection} style={{}}>
          <Image className={style.profileImage} src={'/Memoji_Hi.png'} width={300} height={300} alt=""></Image>
          <text className={style.aboutMe}> I'm passionate about crafting applications from the ground up. With a keen eye for design, I specialize in creating applications with intuitive interfaces!</text>
        </div>
      </div>
      <Expertise/>
      <Footer/>
    </div>
  )
}
