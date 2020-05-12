const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const db = require ("../models");
const bcrypt = require ('bcrypt')

process.env.SECRET_KEY = 'secret'

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