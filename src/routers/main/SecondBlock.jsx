import "./styles/main.css"
import "./styles/secondBlock.css"
import Lines from "./img/Lines";

export default function SecondBlock() {
    return (
        <section className={"secondBlock"}>
            <div className={"animatedBlock"}>
                <Lines/>
            </div>
            <div className={"textBlock"}>

            </div>
        </section>
 )
}