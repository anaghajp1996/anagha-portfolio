import { Fira_Code } from "next/font/google"
import Image from "next/image";
import style from "./page.module.css"
import Header from "./header";
import header from "./Styles/header.module.css"
import { relative } from "path";

const firaCode = Fira_Code({subsets: ['latin']});

export default function Home() {
  return (
    <div className={firaCode.className}>
      {/* <div> */}
        <Header></Header>
      {/* </div> */}
      <div  className={style.home} style={{display: 'flex', justifyContent: 'space-between', margin: '24px'}}>
        <div>
          <h1>Anagha Jayaprakash, </h1>
          <h1>Software Engineer</h1>
          <h4 style={{opacity: '80%'}}>Mobile Application Development | Web Development </h4>
        </div>
        <div style={{position: 'relative'}}>
          <Image className={style.profileImage} src={'/Memoji_Hi.png'} width={300} height={300} alt=""></Image>
        </div>
      </div>
    </div>
  )
}
