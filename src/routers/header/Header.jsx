import logo from "../../img/logo.svg";
import lang from "./img/lang.svg"
import "./styles/header.css"
import 'animate.css';

export default function Header() {
    return (
        <header>
            <div className={"navbar animate__animated animate__fadeInLeft"}>
                <div className={"navEl"}>
                    <img src={logo} alt={"logo"} />
                </div>

                <nav>
                    <a href={"#"} className={"active"}>Главная</a>
                    <a href={"#"}>Конструктор</a>
                    <a href={"#"}>Наши работы</a>
                    <a href={"#"}>О нас</a>
                    <a href={"#"}>Курсы</a>
                </nav>
            </div>

            <div className={"lang animate__animated animate__flash"}>
                <img src={lang} alt={"lang"}/>
            </div>

        </header>
    )
}