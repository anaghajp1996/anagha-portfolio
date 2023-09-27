import { Fira_Code } from "next/font/google"
import Image from "next/image";
import style from "./page.module.css"
import Header from "./header";

const firaCode = Fira_Code({subsets: ['latin']});

export default function Home() {
  return (
    <div className={firaCode.className + ' ' + style.home} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px'}}>
      <Header></Header>
      <div>
        <h1>Anagha Jayaprakash, </h1>
        <h1>Software Engineer</h1>
        <h4 style={{opacity: '80%'}}>Mobile Application Development | Web Development </h4>
      </div>
      <div style={{width: '25%', height: '25%', position: 'relative'}}>
        <Image className={style.profileImage} src={'/Memoji_Hi.png'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
      </div>
    </div>
  )
}
