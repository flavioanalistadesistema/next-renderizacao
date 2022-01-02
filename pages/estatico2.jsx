export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estico #2</h1>
            <span>{props.numero}</span>
        </div>
    )
}