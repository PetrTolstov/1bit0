import "./styles/main.css"
import "./styles/secondBlock.css"
import Lines from "./img/Lines";
import Laptop from "./img/Laptop";

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
            </div>
        </section>
 )
}