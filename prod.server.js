var express = require('express');
var config = require('./config/index');

var port = process.env.POST || config.build.port;
var app = express();
var router = express.Router();
router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});
app.use(router);

var appDate = require('./data.json');
var seller = appDate.seller;
var goods = appDate.goods;
var ratings = appDate.ratings;

var apiRoutes = express.Router();
apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});
apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

var uri = 'http://localhost:' + port;

console.log('> Starting dev server...');
module.express = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('> Listening at ' + uri + '\n');
});
