import Site from "./img/Site";
import "./styles/main.css"
import "./styles/firstBlock.css"

export default function FirstBlock() {
    return (
        <section className={"firstBlock"}>
            <div className={"textBlock"}>
                <h1>
                    РАЗРАБОТКА САЙТОВ С УНИКАЛЬНЫМ
                    <br/>
                    <br/>
                    <span className={"emtyInsideTitle"}>ВЕБ-ДИЗАЙНОМ</span>
                </h1>
                <div>
                    <a>Посмотреть работы</a>
                    <a>Узнать стоимость</a>
                </div>
            </div>
            <Site/>
        </section>
    )

}