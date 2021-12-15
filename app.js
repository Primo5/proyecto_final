const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User  = require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(_dirname,'public')));

const mongo_uri = 'mongodb://primo:password/todos';

mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    }else {
        console.log(`Successfully connected to ${mongo_uri}`);
    }
});

app.post('/register',(req, res)=>{
    const {username,email, password} = req.body;
    const user= new User({username, password});
    user.save(err =>{
        if(err){
            res.status(500).send('ERROR AL REGISTRAR AL USUSARIO');
        }else{
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
});
app.post('/authenticate',(req, res)=>{
    const {username, password} = req.body;

    User.findOne({username}, (err, user)=>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUSARIO');
        }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            user.isCorrectPassword(password, (err, result)=>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORECCTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
        }
    })

});
app,listen(3000,()=>{
    console.log('server started')
});



