export default function handler(req, res) {
    const id = req.query.id
    res.status(200).json({
        id: id,
        name: 'Flavio Santos ' + `${id}`,
        email: `flavio${id}@gmail.com`
    })
}