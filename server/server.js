// MODULES
const express = require('express');
const path = require('path');

// SET PATHS
const publicPath = path.join(__dirname, '../public');
// console.log(__dirname + '/ ../public');
// console.log(publicPath);

// SET GLOBAL VARIABLES
let port = process.env.PORT || 3000;
let app = express();

// SET MIDDLEWARE
app.use(express.static(publicPath)); 

// ROUTES
// app.get('/', (req, res) => {
// 	res.render('index.html');
// });

// START SERVER
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});