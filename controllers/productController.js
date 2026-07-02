const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    try {
        const { search, category, sort } = req.query;
        let query = {};
        
        if (search) query.name = { $regex: search, $options: 'i' };
        if (category) query.category = category;

        let productsQuery = Product.find(query);
        if (sort) productsQuery = productsQuery.sort(sort);

        const products = await productsQuery;
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};