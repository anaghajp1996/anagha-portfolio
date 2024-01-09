import Link from "next/link";
import Image from "next/image";

export default function ExternalLink({href, iconPath}) {
    return(
        <Link href={href} style={{textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}} passHref={true} target="_blank">
        <Image height={24} width={24} alt="icon" src={iconPath}></Image>
        </Link>
    );
}