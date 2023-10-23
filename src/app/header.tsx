import Link from 'next/link';
import header from './Styles/header.module.css'
import Logo from './logo';

export default function Header() {
    return (
        <div>
            <div className={header.header}>
                <Logo/>
                <div className={header.links}>
                    <Link href="#home">Home</Link>
                    <Link href="#expertise">Expertise</Link>
                    <Link href="">Resume</Link>
                </div>
            </div>    
            <div className={header.border}>
                
            </div>    
        </div>
    );
}