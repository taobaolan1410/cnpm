const router = require('express').Router();
const User = require("../models/user_model");

router.route(`/`).get((req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(
      err => res.status(500).json(err)
    )
});

router.route(`/add`).post((req, res) => {
  const user_name = req.body.user_name
  const password = req.body.password
  const email = req.body.email
  const name = req.body.name
  const gender = req.body.gender
  const birthdate = req.body.birthdate
  const identity_card = req.body.identity_card
  const phone_number = req.body.phone_number
  const address = req.body.address
  const histories = req.body.histories

  const newUser = new User({
    user_name,
    password,
    email,
    name,
    gender,
    birthdate,
    identity_card,
    phone_number,
    address,
    histories
  })
  newUser.save()
    .then(
      user => res.status(201).json(user)
    )
    .catch(
      err => res.status(400).json(err)
    )
})

router.route(`/:id`).get((req, res) => {
  User.findById(req.params.id)
    .then(
      user => res.status(200).json(user)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/:id`).delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(
      user => res.status(200).json(user)
    )
    .catch(
      err => res.status(404).json(err)
    )
})

router.route(`/update/:id`).post((req, res) => {
  User.findById(req.params.id)
    .then(
      user => {
        user.user_name = req.body.user_name
        user.password = req.body.password
        user.email = req.body.email
        user.name = req.body.name
        user.gender = req.body.gender
        user.birthdate = req.body.birthdate
        user.identity_card = req.body.identity_card
        user.phone_number = req.body.phone_number
        user.address = req.body.address
        user.histories = req.body.histories

        user.save()
          .then(
            user => res.status(200).json(user)
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