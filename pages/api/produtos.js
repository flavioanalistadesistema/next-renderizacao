// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
            {id: 1, nome: 'Caneta', preco: 5.00},
            {id: 2, nome: 'Borracha', preco: 2.00},
            {id: 3, nome: 'Caderno', preco: 15.00},
            {id: 4, nome: 'Apontador', preco: 7.50}
        ]
    )
}
