import logo from "../../img/logo.svg";
import lang from "./img/lang.svg"
import "./styles/header.css"
import 'animate.css';
import './scripts/headerscript.js'

export default function Header() {
    return (
        <header>

            <div className={"navbar animate__animated animate__fadeInLeft"}>
                <div className={"navEl"}>
                    <div id={"logo"}></div>
                </div>

                <nav>
                    <a href={"#main"} id={"main"} className={"active navA"}>Главная</a>
                    <a href={"#constructor"} id={"constructor"}  className={"navA"}>Конструктор</a>
                    <a href={"#ourworks"} id={"ourworks"}  className={"navA"}>Наши работы</a>
                    <a href={"#aboutus"} id={"aboutus"}  className={"navA"}>О нас</a>
                    <a href={"#curses"} id={"curses"}  className={"navA"}>Курсы</a>
                </nav>
            </div>

            <div className={"lang animate__animated animate__flash"}>
                <img src={lang} alt={"lang"}/>
            </div>

        </header>
    )
}