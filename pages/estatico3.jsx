export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        },
        revalidate: 5
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estico #3</h1>
            <span>{props.numero}</span>
        </div>
    )
}