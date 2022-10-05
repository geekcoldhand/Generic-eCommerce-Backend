const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{cosnt tags = await Tag.findAll(
    include: [
      {
        model: Product,
      },
  
    ],
  )
    res.status(200).json(tags)
  } catch(error){
    res.status(500).end(error)
  }
    
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const productID = await Product.findOne({
      where: {
        id: req.param.id
      },
      inculde: [
        {
          model: Product
        }
      ]
    })
 
  } catch (error) {
    res.status(500).end(error)
  }

});

router.post('/', (req, res) => {
  // create a new tag

});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{

    const tagUpdate = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(tagUpdate)
  } catch(error){
    res.status(500).end(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDelete = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
  )
  } catch(error){
    res.status(500).end(error)
  }
});

module.exports = router;
