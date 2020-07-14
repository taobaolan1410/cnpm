const router = require('express').Router();
const Provider = require("../models/provider_model");

router.route(`/`).get((req, res) => {
  Provider.find()
    .then(providers => res.status(200).json(providers))
    .catch(
      err => res.status(500).json(err)
    )
});

router.route(`/add`).post((req, res) => {
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const address = req.body.address
  const website = req.body.website

  const newProvider = new Provider({
    name,
    email,
    phone,
    address,
    website,
  })
  newProvider.save()
    .then(
      provider => res.status(201).json(provider)
    )
    .catch(
      err => res.status(400).json(err)
    )
})

router.route(`/:id`).get((req, res) => {
  Provider.findById(req.params.id)
    .then(
      provider => res.status(200).json(provider)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/:id`).delete((req, res) => {
  Provider.findByIdAndDelete(req.params.id)
    .then(
      provider => res.status(200).json(provider)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/update/:id`).post((req, res) => {
  Provider.findById(req.params.id)
    .then(
      provider => {
        provider.name = req.body.name
        provider.email = req.body.email
        provider.phone = req.body.phone
        provider.address = req.body.address
        provider.website = req.body.website

        provider.save()
          .then(
            provider => res.status(200).json(provider)
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