import style from "./Styles/expertise.module.css"
import { Open_Sans } from "next/font/google"
import TechIcon from "./techIcon";

const openSans = Open_Sans({subsets: ['latin']});

export default function Expertise() {
    return (
    <div id="expertise" className={openSans.className} style={{padding: "16px 32px"}}>
        <table className={style.table}>
            <tbody>
                <tr>
                    <th>Mobile</th>
                    <td>
                        <TechIcon title="Swift"/>
                    </td>
                </tr>
                <tr>
                    <th>Web</th>  
                    <td>john.doe@example.com</td>      
                </tr>  
                <tr>
                    <th>Other</th>  
                    <td>john.doe@example.com</td>      
                </tr>  
            </tbody>
            </table>
    </div>);
}