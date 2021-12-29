import logo from "../../img/logo.svg";
import lang from "./img/lang.svg";
import "./styles/header.css";
import 'animate.css';
import './scripts/headerscript.js';
import './scripts/langs.js';

export default function Header() {
    return (
        <header>
            {/* Trooman`s code start */}
            <section className="langsWrapper animate__animated">
                <div className="langs">
                    <span>ru</span>
                    <span>eng</span>
                    <span>est</span>
                </div>
            </section>
            {/* Trooman`s code end */}
            <div className={"navbar animate__animated animate__fadeInLeft"}>
                <div className={"navEl"}>
                    <div id={"logo"}></div>
                </div>

                <nav>
                    <a href={"#"} id={"main"} className={"active navA"}>Главная</a>
                    <a href={"#"} id={"constructor"}  className={"navA"}>Конструктор</a>
                    <a href={"#"} id={"ourworks"}  className={"navA"}>Наши работы</a>
                    <a href={"#"} id={"aboutus"}  className={"navA"}>О нас</a>
                    <a href={"#"} id={"curses"}  className={"navA"}>Курсы</a>
                </nav>
            </div>

            <div className={"lang animate__animated animate__fadeInRight"}>
                <div>
                    <img src={lang} alt={"lang"}/>
                </div>
            </div>

        </header>
    )
}