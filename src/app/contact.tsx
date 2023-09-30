import Header from "./header";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import style from "./page.module.css"
import contact from "./Styles/contact.module.css"

const openSans = Open_Sans({subsets: ['latin']}); 

export default function Contact() {
    return (
      <div id="contact" className={openSans.className + ' ' + contact.contact} style={{height: '100%'}}>
        <div style={{}}>
          <Image className={style.profileImage} src={'/Contact.png'} width={300} height={300} alt=""></Image>
        </div>
      </div>
    )
  }