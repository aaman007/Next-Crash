import { articles } from "../../../data";

export default  function articleList(req, res) {
    res.status(200).json(articles)
}