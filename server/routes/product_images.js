const express =require('express')
const router = express.Router()
const {product_images}=require('../models');

router.get('/',async (req,res)=>{
    // res.json("hello world!product_images");
    const listOfProductimages=await product_images.findAll();
    res.json(listOfProductimages);
});

//Associated with product ID... Image URL only
router.get('/:productId', async (req, res) => {
    const product_id = req.params.productId;

    try {
        const imagesByProduct = await product_images.findAll({
            where: {
                product_id: product_id
            },
            order: [
                ['image_order', 'ASC'],
            ],
            attributes: ['image_location']
        });
        res.json(imagesByProduct);
    } catch (error) {
        console.error('Error fetching product images:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Associated with product ID, where image_order value is lowest...
router.get('/min/:productId', async (req, res) => {
    const product_id = req.params.productId;

    try {
        const imagesByProduct = await product_images.findOne({
            where: {
                product_id: product_id
            },
            order: [
                ['image_order', 'ASC'],
            ]
        });
        res.json(imagesByProduct);
    } catch (error) {
        console.error('Error fetching product images:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post("/", async (req,res)=>{
    const product_image=req.body;
    await product_images.create(product_image);
    res.json(product_image);
     
})//This is for frontend 


module.exports=router;