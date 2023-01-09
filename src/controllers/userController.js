const express = require('express');
const router = new express.Router()
// const bcrypt = require('bcrypt');
// const mysql = require('mysql')
const {connection, mysql} = require('../db/sql')

exports.userLogin =  (req, res) => {
    const userName = req.body.name
    const userEmail = req.body.email
    const userPassword = req.body.password
    console.log(req.body)
    connection.query(`select * from users where Email = "${userEmail}"`, async (err, results, field) => {
        if (err) {
            res.status(500).send({
                "message": "Server error"
            })
            console.log(err)
        } else {
            if (results.length == 0) {
                return res.status(401).send({
                    "message": "The entered credentials do not match"
                })
            }
            // const match = await bcrypt.compare(userPassword, results[0].password)
            console.log(results)
            match = (userPassword == results[0].Password) && (userName == results[0].Name) && (userEmail == results[0].Email) 
            if (match) {
                // req.session.userName = results[0].Name
                // res.status(200).send()
                res.render('userdash.hbs', {
                    "user": results[0]
                })
            } else {
                res.status(401).send({
                    "message": "The entered credentials do not match"
                })
            }
        }
    })    
};
exports.userSignUp =  async (req, res) => {
    const userName = req.body.name
    const userEmail = req.body.email
    const userPassword = req.body.password
    const userGroup = req.body.group
    const userPhNo = req.body.PhNo
    const encryptedPassword = userPassword
    connection.query(`insert into users(Name, Email, Bgroup, PhNo, Password) Values ("${userName}", "${userEmail}", "${userGroup}", "${userPhNo}", "${encryptedPassword}")`, (err, results, field) => {
        if (err) {
            console.log(err)
            if (err.errno === 1062) {
                return res.status(406).send({
                    "message": "The entered email is already registered"
                })
                
            }
            res.status(500).send({
                "message": "Server error"
            })
        } else {
            
            const finish = () => {
                res.redirect('/')
            }
            setTimeout(finish, 1500)
        }
    })
    console.log(req.body)
};

exports.bloodBankLogin = (req, res) => {
    const userName = req.body.name
    const userPassword = req.body.password
    console.log(req.body)
    connection.query(`select * from BloodBank where Name = "${userName}"`, async (err, results, field) => {
        if (err) {
            res.status(500).send({
                "message": "Server error"
            })
            console.log(err)
        } else {
            if (results.length == 0) {
                return res.status(401).send({
                    "message": "The entered credentials do not match"
                })
            }
            // const match = await bcrypt.compare(userPassword, results[0].password)
            console.log(results)
            match = (userPassword == results[0].Password) &&(userName == results[0].Name)
            if (match) {
                // req.session.userName = results[0].Name
                // res.status(200).send()
                connection.query(`Select * from users`, async (error, userresults, fields) => {
                    console.log(userresults)
                    res.render('bloodbankdash', {
                        result: userresults,
                        user: userName
                    })
                })
            } else {
                res.status(401).send({
                    "message": "The entered credentials do not match"
                })
            }
        }
    })    
};

exports.bloodBankSignUp = async (req, res) => {
    const userName = req.body.name
    const userPassword = req.body.password
    const encryptedPassword = userPassword
    connection.query(`insert into BloodBank(Name, Password) Values ("${userName}", "${encryptedPassword}")`, (err, results, field) => {
        if (err) {
            console.log(err)
            if (err.errno === 1062) {
                return res.status(406).send({
                    "message": "The entered Name is already registered"
                })
                
            }
            res.status(500).send({
                "message": "Server error"
            })
        } else {
            const finish = () => {
                res.redirect('/')
            }
            setTimeout(finish, 1500)
        }
    })
    console.log(req.body)
};

exports.unregister = async (req, res) => {
    connection.query(`delete from users where Email="${req.body.email}"`, (err, results, field) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                "message": "Server error"
            })
        } else {
            // res.status(200).send()
            res.redirect("/")
        }
    })
};

exports.view = (req, res) => {
    console.log(req.params.email)
    res.render('changePasswd',
     {email: req.params.email})
};
exports.changePasswd = (req, res) => {
    const oldPasswd = req.body.oldPasswd
    const newPasswd = req.body.newPasswd
    const email = req.body.email
    connection.query(`Select * from users where Email = "${email}"`, (err, results, fields) => {
        if (err) {
            res.status(500).send({
                "message": "Server error"
            })
            console.log(err)
        } else {
            if (results.length == 0) {
                return res.status(401).send({
                    "message": "The entered credentials do not match"
                })
            }
            // const match = await bcrypt.compare(userPassword, results[0].password)
            console.log(results)
            match = (oldPasswd == results[0].Password)
            if (match) {
                // req.session.userName = results[0].Name
                // res.status(200).send()
                connection.query('UPDATE users SET Password = ? WHERE Email = ?',[newPasswd,email], (error, userresults, fields) => {
                    if(error) {
                        console.log(error)
                        res.status(500).send({
                            "message": "Server error"
                        })
                    }
                    console.log(userresults)
                    res.render('userdash.hbs', {
                        result: "<div class='updated'>Updated</div>",
                        "user": results[0]
                    })
                })
            }
            else{
                return res.status(401).send({
                    "message": "The entered credentials do not match"
                })
            }
        }
    })
};