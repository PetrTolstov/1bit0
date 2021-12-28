import Site from "./img/Site";
import "./styles/main.css"
import "./styles/firstBlock.css"

export default function FirstBlock() {
    return (
        <section className={"firstBlock"}>
            <div className={"textBlock"}>
                <h1>
                    РАЗРАБОТКА САЙТОВ
                    <br/>
                    С УНИКАЛЬНЫМ
                    <br/>
                    <br/>
                    <span className={"emtyInsideTitle"}>ВЕБ-ДИЗАЙНОМ</span>
                </h1>
                <div className={"links"}>
                    <a href={"#"} className={"blueBorrder"}>Посмотреть работы</a>
                    <a href={"#"} className={"blueInside"}>Узнать стоимость</a>
                </div>
            </div>
            <div className={"SiteSvg"}>
            <Site/>
            </div>
        </section>
    )

}