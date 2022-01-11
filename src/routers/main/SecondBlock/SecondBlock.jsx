import "../main.css"
import "./secondBlock.css"
import Lines from "../../../img/Lines";
import Laptop from "../../../img/Laptop";
import Wave from "../../../img/wave.svg"

export default function SecondBlock() {
    return (
        <section className={"secondBlock"}>
            <div className={"animatedBlock"}>
                <Lines/>
            </div>
            <div className={"textBlock"}>
                <div className={"laptop"}>
                    <Laptop/>
                </div>
                <div className={"textBlockBlock"}>
                    <p>Мы являемся молодой и амбициозной командой, которая стремится к постоянному росту в сфере веб-технологий. <br/> <br/> BIT разрабатывает современные многофункционнальные сайты и приложения с индивидуальным подходом.</p>
                    <img src={Wave} alt={"wave"}/>
                </div>
            </div>
        </section>
 )
}