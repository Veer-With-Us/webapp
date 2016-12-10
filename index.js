const express 	= require('express');
const session   = require('express-session');
const webpack 	= require('webpack');
const config 		= require('./webpack.config');
const path      = require('path');

const app 			= express();
// const MemoryStore = require('session-memory-store')(express);
const compiler  = webpack(config);

// app.use(session({
// 	store: MemoryStore,
// 	secret: 'keyboard cat', 
// 	resave: true,
// 	saveUninitialized: true,
// 	cookie: { maxAge: 60000 }}));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'))
});



// app.get('/', function(req, res, next) {
//   let sess = req.session
//   if (sess.views) {
//     sess.views++
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<p>views: ' + sess.views + '</p>')
//     res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
//     res.end()
//   } else {
//     sess.views = 1
//     res.end('welcome to the session demo. refresh!')
//   }
// })

app.listen(3000, 'localhost', (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('Listening on port 3000');
});
