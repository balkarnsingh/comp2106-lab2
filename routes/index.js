var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Information About My Family' });
});
/* GET about page */
router.get('/gurdeep', (req, res, next) => {
  res.render('gurdeep', {title: 'About my Father',
  information: [{
    bio: 'My father name is Gurdeep Singh. He is from India(Punjab).He is 45 years old.  He is a Farmer. He is very hardworking man, good and polite person.'
  }]
  })
})

router.get('/parwinder', (req, res, next) => {
  res.render('parwinder', {title: 'About my Mother',
    information: [{
      bio: 'My mother name is Parwinder Kaur. She is from India(Punjab).She is 43 years old. She is a house wife. She is very hardworking women. She like to help poor and needy people.'
    }]
  })
})

router.get('/navdeep', (req, res, next) => {
  res.render('navdeep', {title: 'About my Sister',
    information: [{
      bio: 'My sister name is Navdeep Kaur. She is from India(Punjab).She is 18 years old.  She is a student. Right now she is in 12th standard. She is bright and intelligent student. She want to be a doctor'
    }]
  })
})

module.exports = router;
