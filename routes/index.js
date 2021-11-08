var express = require('express');
var router = express.Router();
const multer = require('multer');
const tf=require('../utility/ts');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../public/images')
  },
  filename: function (req, file, cb) {
    cb(null, "food.jpg")
  }
})
const upload = multer({storage:storage});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team5' });
});

router.post('/upload',upload.single('photo'),(req,res)=>{
  if(req.file){
    tf.imageClassification(__dirname + '/../public/images/food.jpg');  
  }else{
    throw 'error';
  }
  res.redirect("/");
});
module.exports = router;
