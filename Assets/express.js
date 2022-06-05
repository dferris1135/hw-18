const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-net', {
  useUnifiedTopology: true,
    useNewUrlParser: true,
      // useFindAndModify: false,
});

mongoose.set('debug', true);


app.listen(port, () => {
    console.log('listening on port ' + port)
});