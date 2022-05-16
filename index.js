require('dotenv').config()

const cors = require('cors');
const express = require('express');
const multer = require('multer');
const upload = multer();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (_, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post(
  '/api/fileanalyse',
  upload.single('upfile'),
  (req, res) => {
    res.json({
      "name": req.file.originalname,
      "type": req.file.mimetype,
      "size": req.file.size,
    });
  }
);

app.listen(port, function () {
  console.log('Server running at http://localhost:' + port)
});
