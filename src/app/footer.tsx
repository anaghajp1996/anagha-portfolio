import Link from "next/link";
import footer from "./Styles/footer.module.css"
import ExternalLink from "./externalLink";
import Image from "next/image";

export default function Footer() {
    return (
        <div style={{textAlign: "center", paddingTop: '16px'}}>
            <div className={footer.border}></div>
            <text className={footer.title}>Get in touch with me!</text>
            <div className={footer.footer} style={{display: "flex", justifyContent: "center"}}>
                <ExternalLink href={"https://www.linkedin.com/in/anaghakj/"} iconPath={"/linkedin.png"}/>
                <ExternalLink href={"https://github.com/anaghajp1996"} iconPath={"/github.png"}/>
                <ExternalLink href={"mailto:anaghakolalajayaprakash@gmail.com"} iconPath={"/email.png"}/>
            </div>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons"></a>
        </div>
    );
}