import { Fira_Code } from "next/font/google"
import Image from "next/image";
import style from "./page.module.css"
import Header from "./header";
import header from "./Styles/header.module.css"
import { relative } from "path";

const firaCode = Fira_Code({subsets: ['latin']});

export default function Home() {
  return (
    <div className={firaCode.className} style={{height: '100%'}}>
      <Header></Header>
      <div className={style.home} style={{display: 'flex', margin: '24px', alignItems: "center", height: "100%"}}>
        <div>
          <h1>Anagha Jayaprakash, </h1>
          <h1>Software Engineer</h1>
          <h4>Mobile Application Development | Web Development </h4>
        </div>
        <div className={style.profileImageDiv} >
          <Image className={style.profileImage} src={'/Memoji_Hi.png'} width={0} height={0} sizes="100vw" alt="" style={{ width: '100%', height: 'auto' }}></Image>
        </div>
        <h3> I'm passionate about crafting mobile and web apps from the ground up. With a keen eye for design and a commitment to user-centric solutions, I specialize in creating applications with intuitive interfaces that elevate the user experience.</h3>
      </div>
    </div>
  )
}
