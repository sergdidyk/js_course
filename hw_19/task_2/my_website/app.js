var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var indexRouter = require('./routes/index');

var app = express();

//EMAIL SENDING
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/contact', urlencodedParser, function (req, res) {
	if(!req.body){
  	return res.sendStatus(400);
  }

	var output = `<h3>You have a new contact request:</h3>
		<ul>
			<li>Name: ${req.body.userName}</li>
			<li>Email: ${req.body.userEmail}</li>
			<li>Phone: ${req.body.userPhone}</li>
		</ul>
	`;

	  let transporter = nodemailer.createTransport({
    		host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: '', // ENTER HERE YOUR EMAIL
            pass: '' // ENTER HERE YOUR PASSWORD
        },
        tls: {
        	rejectUnathorized: false //in order to send mails from localhost
        }
    });

    let mailOptions = {
        from: '"Serhiy Didyk website" <>', // ENTER HERE SENDER ADDRESS
        to: '', // ENTER HERE RECEIVER ADDRESS
        subject: 'Contact request', 
        text: 'Hello world?', 
        html: output 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
	
  res.render('contact', { title: 'Portfolio Website: CONTACT', msg: 'Message is sent!' });
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
