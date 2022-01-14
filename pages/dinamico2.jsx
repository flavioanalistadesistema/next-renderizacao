export async function getServerSideProps() {
    console.log('[SERVE] gerando componente ')
    const produtos = await fetch("http://localhost:3000/api/produtos")
    const resp = await produtos.json()

    return {
        props: {
            resp: resp
        }
    }
}

export default function Estatico4(props) {
    console.log('[CLIENT] renderizando conteudo')

    function renderizarProdutos() {
        return props.resp.map(produto => {
            return <li key={produto.id}>Id: {produto.id} - Nome do Produto: {produto.name} e seu valor é
                R$ {produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Dinamico #2</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}