import Site from "../../../img/Site";
import "../main.css"
import "./firstBlock.css"
import '../../../../node_modules/animate.css/animate.css';

export default function FirstBlock() {
    return (
        <section className={"firstBlock"}>
            <div className={"textBlock"}>
                <h1 className="animate__animated animate__fadeInBottomLeft">
                    РАЗРАБОТКА САЙТОВ
                    <br/>
                    С УНИКАЛЬНЫМ
                    <br/>
                    <br/>
                    <span className={"emtyInsideTitle"}>ВЕБ-ДИЗАЙНОМ</span>
                </h1>
                <div className={"links animate__animated animate__bounceInUp"}>
                    <a href={"#"} className={"blueBorrder"}>Посмотреть работы</a>
                    <a href={"#"} className={"blueInside"}>Узнать стоимость</a>
                </div>
            </div>
            <div className={"SiteSvg animate__animated animate__fadeInBottomRight"}>
            <Site/>
            </div>
        </section>
    )

}