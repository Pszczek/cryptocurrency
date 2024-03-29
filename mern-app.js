const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
// const hbs = require('express-handlebars');

require('./src/db/conn');
const Register = require('./src/models/registers');
const { json } = require('express');
const { log } = require('console');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, './public' );
const template_path = path.join(__dirname, './templates/views' );
const partials_path = path.join(__dirname, './templates/partials' );

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get('/index', (req,res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Create a new user in our database
app.post('/register', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword:cpassword
            })

            const registered = await registerEmployee.save();
            // await registerEmployee.save();
            console.log('Submitted')
            res.status(201).render('index');
        } else {
            res.send('Passwords are not matching');
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// Login check
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});

        if(useremail.password === password) {
            // log('Welcome!')
            res.status(201).render('index')
            log('Welcome!')
        } else {
            res.send("Invalid login details");
        }
        // res.send(useremail);
        console.log(useremail);
        //res.send(useremail.password);
        // console.log(`${email} and password is ${password}`);
    } catch (error) {
        res.status(400).send('Invalid Email');
    }
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
});