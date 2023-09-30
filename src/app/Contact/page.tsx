import Header from "../header";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({subsets: ['latin']}); 

export default function Home() {
    return (
      <div className={openSans.className} style={{height: '100%'}}>
        <Header></Header>
        
      </div>
    )
  }