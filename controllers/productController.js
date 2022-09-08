import Product from "../models/products.js";

export default class ProductController {
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
  static display = (req, res) => {};
}
