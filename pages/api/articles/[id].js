import { articles } from "../../../data";

export default  function article({query: {id}}, res) {
    const filtered = articles.filter(article => article.id === id)

    if (filtered.length) {
        res.status(200).json(filtered[0]);
    }
    else {
        res.status(404).json({message: 'Not Found'})
    }
}