import Link from "next/link";
import Image from "next/image";

interface params {
  href: string;
  iconPath: string;
}

export default function ExternalLink(params: params) {
  return (
    <Link
      href={params.href}
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      passHref={true}
      target="_blank"
    >
      <Image height={24} width={24} alt="icon" src={params.iconPath}></Image>
    </Link>
  );
}
