import Link from "next/link";
import Image from "next/image";

export default function ExternalLink({title, href}) {
    return(
        <Link href={href} style={{textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}} passHref={true} target="_blank">{title}
            <Image src="/ExternalLink.png" alt="" height={24} width={24} style={{padding: '0px 4px'}}></Image>
        </Link>
    );
}