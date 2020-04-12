const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  methodOverride((request, response) => {
    if (request.body && request.body._method) {
      const method = request.body._method;
      return method;
    }
  })
);

const baseRouter = require('./routes/baseRouter');
app.use('/', baseRouter);

const cohortsRouter = require('./routes/cohortsRouter');
app.use('/cohorts', cohortsRouter);

const PORT = 3000;
const ADDRESS = 'localhost'; // 127.0.0.1
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});
