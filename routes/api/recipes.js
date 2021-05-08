const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/recipes')


router.get('/', recipesCtrl.index); //see all instances of resource
router.post('/', recipesCtrl.create); 


module.exports = router;