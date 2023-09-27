import { Port_Lligat_Sans, Source_Code_Pro } from "next/font/google"
import Image from "next/image";

const sourceCodePro = Source_Code_Pro({subsets: ['latin']});

export default function Home() {
  return (
    <div className={sourceCodePro.className}>
      <h1>Hello!</h1>
    </div>
  )
}
