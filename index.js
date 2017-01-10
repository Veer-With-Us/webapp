const express   = require('express');
const webpack   = require('webpack');
const config    = require('./webpack.config');
const path      = require('path');

const app       = express();
const compiler  = webpack(config);
const sg        = require('sendgrid')(`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`);
const helper    = require('sendgrid').mail;
const bodyParser = require('body-parser');

app.use(bodyParser());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
});

app.post('/send', (req, res) => {
  console.log("inside send", req.body)
  from_email = new helper.Email(`sigmaOutboxTest@example.com`);
  to_email = new helper.Email(req.body.email);
  subject = "You recieved a merit!"
  content = new helper.Content("text/plain", `You recieved a ${req.body.merit} merit! Yay!`)
  mail = new helper.Mail(from_email, subject, to_email, content)

  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
  })
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening on port 3000');
});
