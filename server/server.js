const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Models
const { User } = require("./models/user");

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.post("/api/users/register", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      userdata: doc,
    });
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // console.log(user.__proto__)
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
      

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
        //   token: user.token
        });
      });
    });
  });
});
const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`server on ${port}`));
