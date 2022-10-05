const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
   try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.json(categories);
  } catch (error) {
    res.status(500).end(error);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // its associated with Products
  try{
    const categories = await Category.findOne({
      where: req.params.id,
      include: [
        model: Product
      ]
    });

  }catch (error){
  res.status(500).end(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const catData = await Category.create(req.body)
    res.json(catData)
  
  }catch(error){
    res.status(500).end(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{

    const catUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    res.json(catUpdate)
  } catch(error){
    res.status(500).end(error)
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catDelete = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
  )
  } catch(error)
});

module.exports = router;
