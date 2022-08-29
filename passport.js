const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const passport = require("passport");
require("dotenv").config({path:'./.env'});

const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID_ENV;

const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET_ENV;

const GITHUB_CLIENT_ID =process.env.GITHUB_CLIENT_ID_ENV;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET_ENV;
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID_ENV;
const FACEBOOK_APP_SECRET=process.env.FACEBOOK_APP_SECRET_ENV;

const AMAZON_CLIENT_ID =process.env.AMAZON_CLIENT_ID_ENV;
const AMAZON_CLIENT_SECRET =process.env.AMAZON_CLIENT_SECRET_ENV;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      /*    const user ={
        username:profile.displayName,
        avatar:profile.photos[0]
      }
 */
    }
  )
);

////////github
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      /*   User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  }); */
    }
  )
);

////////facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      /*   User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  }); */
    }
  )
);

//////amazon
passport.use(
  new AmazonStrategy(
    {
      clientID: AMAZON_CLIENT_ID,
      clientSecret: AMAZON_CLIENT_SECRET,
      callbackURL: "/auth/amazon/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      /*   User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  }); */
    }
  )
);

////////serialize
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/* 

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
/////
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script> */
