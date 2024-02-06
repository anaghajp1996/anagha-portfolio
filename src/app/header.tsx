import Link from "next/link";
import header from "./Styles/header.module.css";

interface headerParams {
  home: string;
  expertise: string;
}

export default function Header(headerParams: headerParams) {
  return (
    <div className={header.fixed}>
      <div className={header.header}>
        <Link href={headerParams.home} className={header.logo}>
          Anagha Jayaprakash
        </Link>
        <div className={header.links}>
          <Link href={headerParams.home}>Home</Link>
          <Link href={headerParams.expertise}>Expertise</Link>
          <Link href="Anagha Jayaprakash Resume.pdf" target="_blank">
            Resume
          </Link>
        </div>
      </div>
      <div className={header.border}></div>
    </div>
  );
}
