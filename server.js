const express = require('express');
const path = require('path');
const cors = require('cors');
var mongoose = require('mongoose');
// Port Number
const port = process.env.PORT || 3000;

const app = express();
// // Connect To Database (OLD CODE)
// 'mongodb://ahmed-diab:152010mohmed@ds125302.mlab.com:25302/message-ahmed' ||
// "mongodb://localhost:27017/mean-stake"
mongoose.connect('mongodb://ahmed-diab:152010mohmed@ds125302.mlab.com:25302/message-ahmed', { useNewUrlParser: true });
// // On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ');
});
// // On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+ err);
});
// const admin = require('./routes/admin');
const message = require('./routes/message');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'images/')));
app.use(express.static(path.join(__dirname, 'dist/')));


app.use(cors());

app.use(express.json());
// app.use('/admin', admin)
app.use('/message', message)

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+ port);
});
