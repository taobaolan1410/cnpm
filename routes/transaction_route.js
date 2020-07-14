const router = require('express').Router();
const Transaction = require("../models/transaction_model");

router.route(`/`).get((req, res) => {
  Transaction.find()
    .then(transactions => res.status(200).json(transactions))
    .catch(
      err => res.status(500).json(err)
    )
});

router.route(`/add`).post((req, res) => {
  const status = req.body.status
  const items = req.body.items
  const shipping_address = req.body.shipping_address
  const form_of_delivery = req.body.form_of_delivery
  const date = req.body.date

  const newTransaction = new Transaction({
    status,
    items,
    shipping_address,
    form_of_delivery,
    date
  })
  newTransaction.save()
    .then(
      transaction => res.status(201).json(transaction)
    )
    .catch(
      err => res.status(400).json(err)
    )
})

router.route(`/:id`).get((req, res) => {
  Transaction.findById(req.params.id)
    .then(
      transaction => res.status(200).json(transaction)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/:id`).delete((req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(
      transaction => res.status(200).json(transaction)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/update/:id`).post((req, res) => {
  Transaction.findById(req.params.id)
    .then(
      transaction => {
        transaction.status = req.body.status
        transaction.items = req.body.items
        transaction.shipping_address = req.body.shipping_address
        transaction.form_of_delivery = req.body.form_of_delivery
        transaction.date = req.body.date

        transaction.save()
          .then(
            transaction => res.status(200).json(transaction)
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