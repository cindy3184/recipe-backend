const Recipe = require('../models/recipe');


async function index(req, res) {
    try {
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}


async function create(req, res) {
    try {
        await Recipe.create(req.body);
        res.status(201)
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' })
    }

}

module.exports = {
    index,
    create,
};