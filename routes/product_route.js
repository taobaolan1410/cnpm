const router = require('express').Router();
const Product = require("../models/product_model");

router.route(`/`).get((req, res) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(
      err => res.status(500).json(err)
    )
});

router.route(`/add`).post((req, res) => {
  const _id = req.body._id
  const name = req.body.name
  const provider_name = req.body.provider_name
  const images = req.body.images
  const details = req.body.details
  const categories = req.body.categories
  const brand = req.body.brand
  const description = req.body.description
  const price = req.body.price
  const newProduct = new Product({
    _id,
    name,
    provider_name,
    images,
    details,
    categories,
    brand,
    description,
    price
  })
  newProduct.save()
    .then(
      product => res.status(201).json(product)
    )
    .catch(
      err => res.status(400).json(err)
    )
})

router.route(`/:id`).get((req, res) => {
  Product.findById(req.params.id)
    .then(
      product => res.status(200).json(product)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/:id`).delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(
      product => res.status(200).json(product)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/update/:id`).post((req, res) => {
  Product.findById(req.params.id)
    .then(
      product => {
        product.name = req.body.name
        product.provider_name = req.body.name
        product.images = req.body.images
        product.details = req.body.details
        product.categories = req.body.categories
        product.brand = req.body.brand
        product.description = req.body.description
        product.price = req.body.price

        product.save()
          .then(
            product => res.status(200).json(product)
          )
          .catch(
            err => res.status(404).json(err)
          )
      }
    )

    .catch(
      err => res.status(404).json(err)
    )
})

module.exports = router;