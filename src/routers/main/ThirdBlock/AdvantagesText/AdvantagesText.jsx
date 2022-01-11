import "./AdvantagesText.css"


export default function AdvantagesText(props) {
    return (
        <section className={"AdvantagesText"}>
            <h3 className={props.side ?  "leftHeading AdvantagesHeading": "AdvantagesHeading"}>{props.heading}</h3>
            <p className={"leftHeading"}>{props.children}</p>
        </section>
    )
}