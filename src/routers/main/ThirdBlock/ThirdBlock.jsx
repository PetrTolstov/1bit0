import "../main.css"
import "./ThirdBlock.css"
import AdvantagesText from "./AdvantagesText/AdvantagesText";
import qualityIcon from  "../../../img/qualityIcon.svg"
import securityIcon from "../../../img/securityIcon.svg"
import estheticIcon from "../../../img/estheticIcon.svg"


export default function ThirdBlock() {
    return (
        <section className={"ThirdBlock"}>
            <h2 className={"choiceUs"}><span>Выбирая нас,</span><span>Вы выбираете</span></h2>
            <div className={"lineOfAdvantage"}>
                <img src={qualityIcon} alt={"qualityIcon"} />
                <AdvantagesText heading={"Качество"}>
                    Правильно функционирующий и настроенный на работоспособность веб-сайт
                </AdvantagesText>
            </div>
            <div className={"lineOfAdvantage"}>
                <AdvantagesText heading={"Безопасность"} side={"leftHeading"}>
                    ...ведь мы за безопасный сайт
                </AdvantagesText>
                <img src={securityIcon} alt={"qualityIcon"}/>
            </div>
            <div className={"lineOfAdvantage"}>
                <img src={estheticIcon} alt={"qualityIcon"}/>
                <AdvantagesText heading={"Эстетику"}>
                    Красивую визуальную составляющую Вашего веб-приложения
                </AdvantagesText>
            </div>
        </section>
 )
}