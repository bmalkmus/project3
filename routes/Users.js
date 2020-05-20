const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const db = require ("../models");
const bcrypt = require ('bcrypt')

process.env.SECRET_KEY = 'secret'

// NEED TO USE POSTMAN TO SEE IF THIS POSTS.......THEN WORK FROM THERE

users.get('/saved', (req, res) => {
    db.Lists.findAll({
    })
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.send(err)
    })

});

users.post('/saved', (req, res) => {
    const savedData = {
        user : req.body.user,
        title : req.body.title,
        upc : req.body.upc,
        description : req.body.description,
        images : req.body.images,
        platform : req.body.platform,
        link : req.body.link,
        price : req.body.price,
        shipping : req.body.shipping,
        condition : req.body.condition,
        datefind : req.body.datefind
    }

    db.Lists.findOne({
        where: {
            user: req.body.user,
            title: req.body.title
                }  
    })
    .then (product => {
        if(!product){
            db.Lists.create(savedData)
            .then(product => {
                res.json({ status: product.title + ' saved'})
            })
            .catch(err => {
                console.log(err)
                res.send("there is an error" + err)
            })
        }        
        else {
            res.json ({ error: "Product already saved!"})
        }
    })
    .catch (err => console.log(err))
})

users.post('/register', (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password

    }

    db.Users.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            db.Users.create(userData)
            .then(user => {
                res.json({ status: user.email + ' registered'})
            })
            .catch(err => {
                res.send(err)
            })
        } 
        else {
            res.json ({ error: "User already exists!"})
        }
    })
    .catch (err => console.log(err))
})

users.post ('/login', (req, res) => {
    db.Users.findOne({
        where: {email: req.body.email}
    })
    .then(user => {
        if(user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: '1h'
                })
                res.send(token)
            }
        }
        else res.status(400).json({error: 'User does not exist'})
    })
    .catch (err => console.log(err))
})

module.exports = users