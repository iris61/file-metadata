
var http = require('http');
var path = require('path');
var URL = require('url');
var express = require('express');
var multer  = require('multer');

var app = express();
app.use(express.static(__dirname));

var port = process.env.PORT || 3000;

var upload = multer({ dest: 'uploads/' });

app.post('/uploads', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json({
      name: req.file.originalname,
      size: req.file.size,
    })
    clearUploads()
  } else {
    res.json({ error: 'No file to upload, please browse for a file first.' })
  }
})

app.get('/', function(req, res){
    var indexhttp = path.join(__dirname, 'index.html');
    res.send(indexhttp);
});
app.listen(port, function () {
  console.log('Node app listening on port ' + port + '!');
});