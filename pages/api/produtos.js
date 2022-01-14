// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleartorio(min = 1, max = 10000) {
    return parseInt(Math.random() * (max - min + 1)) + min
}

export default function handler(req, res) {
    res.status(200).json([
            {id: numeroAleartorio(), nome: 'Caneta', preco: 5.00},
            {id: numeroAleartorio(), nome: 'Borracha', preco: 2.00},
            {id: numeroAleartorio(), nome: 'Caderno', preco: 15.00},
            {id: numeroAleartorio(), nome: 'Apontador', preco: 7.50}
        ]
    )
}
