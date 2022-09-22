import Product from "../models/products.js";

export default class ProductController {
  //create new product in database
  static create = (req, res) => {
    console.log(req.body);
    Product.create(
      {
        id: req.body.id,
        name: req.body.name,
        quantity: req.body.quantity,
      },
      (error, newProject) => {
        if (error) {
          console.log("creating project error", error);
          return res.status(400).send("error");
        }
        return res.status(201).send("created successfully");
      }
    );
  };
  //displaying the list of products
  static display = async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(201).send(products);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  //deleting products based on id
  static delete = async (req, res) => {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if (product) {
      return res.status(201).send("message:product deleted");
    }
    return res.status(404).send("product doesn't exist");
  };

  //updating the product on the basis of quantity number
  static update = async (req, res) => {
    try {
      const result = await Product.findOne({ id: req.params.id });
      if (result) {
        const updatedQuantity = result.quantity + parseInt(req.query.number);
        if (updatedQuantity <= 0) {
          updatedQuantity = 0;
        }
        await Product.findOneAndUpdate(
          { id: req.params.id },
          {
            $set: { quantity: updatedQuantity },
          }
        );
        return res.status(201).send("updated successfully");
      }
      return res.status(404).send("product doesn't exist");
    } catch (error) {
      console.log(error);
      return res.status(400).send("error");
    }
  };
}
