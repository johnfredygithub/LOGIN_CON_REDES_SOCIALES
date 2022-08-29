const router = require("express").Router();
const passport = require("passport");
require("dotenv").config({path:'./.env'});
const CLIENT_URL = process.env.FRONTEND_ENV;


router.get("/prueba", (req, res) => {
  return res.send("Estos son los <strong>cursos</strong>");
});

//////success
router.get("/login/success", (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message:"successfull",
            user:req.user,
            ////cookie:req.cookies
          });
    } 
});
//////failed
router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message:"failure"
    });
  });
/////logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
})



router.get("/google", passport.authenticate("google", { scope: ["profile","https://www.googleapis.com/auth/cloud-platform"] }));


router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
    
  })
);
/////github
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
    
  })
);

//////facebooktok
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
    
  })
);

/* //////facebooktok
router.get("/twitter", passport.authenticate("twitter", { scope: ["profile"] }));
router.get(
  "/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
    
  })
); */

 router.get('/amazon',
  passport.authenticate('amazon', { scope: ['profile', 'postal_code'] }),
  function(req, res){
    // The request will be redirected to Amazon for authentication, so this
    // function will not be called.
  }); 

 //router.get("/amazon", passport.authenticate("amazon", { ['profile', 'postal_code']}));
router.get(
  "/amazon/callback",
  passport.authenticate("amazon", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
    
  })
); 



module.exports=router;
