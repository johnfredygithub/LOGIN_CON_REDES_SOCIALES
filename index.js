const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const app = express();
const authRoute= require("./routes/auth");
require("dotenv").config({path:'./.env'});

//////cokie-session
app.use(
  cookieSession({
    name: "session",
    keys: ["john"],
    maxAge: 24 * 60 * 60 * 100,
  })
);


/////passport
app.use(passport.initialize());
app.use(passport.session());

/////cors
app.use(
  cors({
    origin: process.env.FRONTEND_ENV, /////frontend
    method: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//////authRoute
app.use("/auth",authRoute);

/////server
app.listen("3333", () => {
  console.log(`server is running ${__dirname}`);
  
});
