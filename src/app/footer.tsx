import Link from "next/link";
import footer from "./Styles/footer.module.css"
import ExternalLink from "./externalLink";
import Image from "next/image";

export default function Footer() {
    return (
        <div className={footer.footer} style={{display: "flex", justifyContent: "center"}}>
            <Image src="/Contact.png" alt="" width={32} height={32}></Image>
            <ExternalLink href={"https://www.linkedin.com/in/anaghakj/"} title='LinkedIn'/>
            <ExternalLink href={"https://github.com/anaghajp1996"} title='GitHub'/>
            <ExternalLink href={"mailto:anaghakolalajayaprakash@gmail.com"} title='E-mail'/>
        </div>
    );
}