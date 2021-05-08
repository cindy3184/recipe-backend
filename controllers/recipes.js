const Recipe = require('../models/recipe');


async function index(req, res) {
    const recipes = await Recipe.find({});
    res.json(recipes);
}


function index(req, res) {

}

function create(req, res) {


}

module.exports = {
    index,
    create,
};