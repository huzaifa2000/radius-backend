const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
// var fetchUser = require("../middleware/fetchUser");
const { Model } = require("mongoose");

const JWT_SECRET = "Radius$FYP";
//ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    // Name must be at least 3 chars long
    body("fullName", "Enter a valid name").isLength({ min: 5 }),

    //gender
    body("gender"),

    //email
    body("email", "Enter a valid email").isEmail(),

    // password must be at least 8 chars long
    body("password", "Enter a valid password").isLength({ min: 8 }),

    //mobileNumber
    body("mobileNumber").isLength({ min: 10 , max:10 }),

    //organization
    body("organization")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check if user exist with this email
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      user = await User.create({
        fullName: req.body.fullName,
        gender:req.body.gender,
        email: req.body.email,
        password: secPass,
        mobileNumber:req.body.mobileNumber,
        organization:req.body.organization
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ authtoken });
      // res.json("success")
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 2:Authenticate a user using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ authtoken });
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3:Get loggedin User details: POST "/api/auth/getuser". Login required
// router.get(
//   "/getuser",
//   fetchUser,

//   async (req, res) => {
//     try {
//       var userID = req.user.id;
//       const user = await User.findById(userID).select("-password");
//       res.send(user);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

router.get(
  "/getAllUsers",

  async(req, res) =>{
    try{
      const data = await User.find({}).select('fullName gender email mobileNumber organization');
      res.json(data)
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
  }
);

module.exports = router;
