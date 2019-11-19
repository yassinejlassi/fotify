const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("config");

const router = express.Router();
const User = require("../models/User");


router.get("/users", (req, res) => {
  User.find().then(user => res.send(user))
});



//ajouter les photos
router.post("/users/:id", (req, res) => {
  // let photos=[]
  User.findOne(req.param.id).update({
      _id: req.params.id
    }, {
      $push: {
        photo: req.body.photo
      }
    }).then(
      res.send({
        sucess: 'true'
      })
    )


    .catch(err => res.send(err));
});

router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const picture = req.body.picture;
  const photo = req.body.photo





  User.findOne({
    email
  }).then(user => {
    if (user) {
      return res.json({
        msg: "user already exist"
      });
    }
    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      picture: picture,
      photo: photo
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;

        newUser
          .save()
          .then(saved =>
            jwt.sign({
                id: saved._id
              },
              config.get("secretKEY"), {
                expiresIn: 3600
              },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token: "Bearer " + token,
                  saved
                });
              }
            )
          )
          // res.json(saved))
          .catch(err => console.log(err));
      });
    });
  });
});

//route: http://localhost:5000/login
//desc: login user
//isPrivate: false
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({
    email
  }).then(user => {
    if (!user) {
      return res.status(400).json({
        msg: "email not found"
      });

    }
    bcrypt.compare(password, user.password).then(isMatched => {
      if (isMatched) {
        const payload = {
          id: user.id,
          email: user.email
        };
        jwt.sign(
          payload,
          config.get("secretKEY"), {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;
            res.json({
              token: "Bearer " + token,
              user
            });
          }
        );
      } else {
        return res.status(400).json({
          msg: "password incorrect"
        });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.user);
  }
);



// router.put("/current/:id", (req, res) => {
//   Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
// });


module.exports = router;