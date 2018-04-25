const fs = require('fs');
const nodemailer = require('nodemailer');
let path = "demo.txt";
let content = "Hello World!";

/* PLEASE, UNCOMMENT THE TASK YOU NEED TO CHECK OUT */

// TASK 1
/*fs.writeFile(path, content, (err) => {
	if(err) return console.log(err);
	console.log("Content of demo.txt: " + content);
});*/


// TASK 2
/*fs.appendFile(path, "\n"+content, (err) => {
		if(err) return console.log(err);
		console.log("Content appended to demo.txt: " + content);
});*/


// TASK 3. Nodemailer module should be installed.
/*let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'youremail@gmail.com', //enter here your email
		pass: 'yourpassword'				 //enter here your password
	}
});
//console.log('created');

let mailOptions = {
	from: 'youremail@gmail.com', //enter here your email
	to: 'serg.didyk@gmail.com',  //my email address
	subject: 'Test email',
	text: 'Test text'
}

transporter.sendMail(mailOptions, (err, info) => {
	if(err) return console.log(err);
	console.log('Email is sent ' + info.response);
});*/