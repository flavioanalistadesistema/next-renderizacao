export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/alunos/tutores`);
    const ids = await res.json();

    const paths = ids.map( id => {
        return {params: { id: `${id}` }}
    })
    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:3000/api/alunos/${params.id}`);
    const alunos = await res.json();
    return {
        props: {
            alunos: alunos
        }
    }
}


export default function Alunos(props) {
    const { alunos } = props
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                <li>{alunos.id}</li>
                <li>{alunos.name}</li>
                <li>{alunos.email}</li>
            </ul>
        </div>
    )
}