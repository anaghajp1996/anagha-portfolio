/* eslint-disable react/jsx-key */
import style from "./Styles/expertise.module.css"
import { Mulish } from "next/font/google"
import TechIcon from "./techIcon";
import "./Constants"
import { technologyUsed } from "./Constants";

const mulish = Mulish({subsets: ['latin']});

export default function Expertise() {
    return (
    <div id="expertise" className={mulish.className} style={{padding: "16px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "16px"}}>
        <text className={style.heading}>What I Do..</text>
        <table className={style.table}>
            <tbody>
            {
            technologyUsed.map(function(tech, j) {
                return (
                <tr key={j}>
                    <th>{tech.title}</th>
                    <td>
                        {tech.techList.map(function(mobile, i) {
                            return <TechIcon key={i} title={mobile}/>;
                        })}
                    </td>
                </tr>
                )
            })}
            </tbody>
            </table>
    </div>);
}