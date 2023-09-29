import header from './Styles/header.module.css'

export default function Header() {
    return (
        <div className={header.header} style={{}}>
            <span style={{width: '100%'}}></span>
            <a href="">Home</a>
            <a href="">Expertise</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    );
}