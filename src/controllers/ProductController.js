const Product = require("../model/ProductModel");

const getAllProduct = async (req, res) => {
	try {
		const cors = await Product.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};



const fetchAllProducts = (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const fetchProductsByCategory = (req, res) => {
  Product.find({ category: req.params.category }, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const createProduct = (req, res) => {
  Product.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.pid }, (err) => {
    if (err) res.status(500).json({ error: err });

    res.status(204).json({ status: "Product deleted!" });
  });
};

const updateProduct = async (req, res) => {
  const pid = req.params.pid;

  try {
    let product = await Product.findById(pid);

    if (!product) {
      return res.status(404).json({ updated: "Product not found" });
    }

    product = await Product.findByIdAndUpdate(pid, req.body);
    res.status(201).json({ updated: "Product updated successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleProduct= (req, res) => {
  console.log(req.params.pid);
  Product.findById(req.params.pid, (err, data) => {
    if (err) return res.status(401).json({ product: "not found" });

    res.status(200).json({ product: data });
  });
};



  const getcategoryItem =async (req, res) => {
    try {
      const cat = req.params.category;
      const category = await Product.find({productCategory:cat});
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json(error);
    }
  };

module.exports = {
    fetchAllProducts,
    getAllProduct,
    createProduct,
    fetchProductsByCategory,
    deleteProduct,
    getSingleProduct,
    updateProduct,
    getcategoryItem,
  };