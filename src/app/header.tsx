import Link from 'next/link';
import header from './Styles/header.module.css'

export default function Header() {
    return (
        <div className={header.header} style={{}}>
            <Link href="">Home</Link>
            <Link href="">Expertise</Link>
            <Link href="">Projects</Link>
            <Link href="#contact">Contact</Link>
        </div>
    );
}