const express = require('express');
const router = new express.Router()
// const bcrypt = require('bcrypt');
// const mysql = require('mysql')
const {connection, mysql} = require('../db/sql')

exports.userLogin =  (req, res) => {
    const userName = req.body.name
    const userEmail = req.body.email
    const userPassword = req.body.password
    const newPassword = req.body.newPasswd
    let age = req.body.age
    let gender = req.body.gender
    let location = req.body.location
    const updateFlag = req.body.update
    console.log(req.body)
    if(updateFlag == undefined) {
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
    }
    else if(updateFlag == 0) {
        connection.query(`Select * from users where Email = "${userEmail}"`, (err, results, fields) => {
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
                match = (userPassword == results[0].Password)
                if (match) {
                    // req.session.userName = results[0].Name
                    // res.status(200).send()
                    connection.query('UPDATE users SET Password = ? WHERE Email = ?',[newPassword,userEmail], (error, userresults, fields) => {
                        if(error) {
                            console.log(error)
                            res.status(500).send({
                                "message": "Server error"
                            })
                        }
                        else {
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
                                    res.render('userdash.hbs', {
                                        "user": results[0]
                                    })
                                }
                            }) 
                        }
                    })
                }
                else{
                    return res.status(401).send({
                        "message": "The entered credentials do not match"
                    })
                }
            }
        })
    }
    else if(updateFlag == 1){
        connection.query(`Select * from users where Email = '${userEmail}'`, async (err, results, fields) => {
            if (err) {
                res.status(500).send({
                    "message": "Server error"
                })
                console.log(err)
            } else {
                // const match = await bcrypt.compare(userPassword, results[0].password)
                console.log(results)
                console.log(age, gender, location)
                if(age == '')
                    age = results[0].Age
                if(gender == '')
                    gender = results[0].Gender
                if(location == '')
                    location = results[0].Location
                console.log(age, gender, location)
                connection.query('UPDATE users SET Age = ?, Gender = ?, Location = ? WHERE Email = ?', [age, gender, location, userEmail], (err, results, field) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send({
                            "message": "Server error"
                        })
                    } 
                    else {
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
                            res.render('userdash.hbs', {
                                "user": results[0]
                            })
                        }
                    }) 
                    }
                })
            }
        })
    }
    else {
        connection.query(`select * from users where Email = "${userEmail}"`, async (err, results, field) => {
            if (err) {
                res.status(500).send({
                    "message": "Server error"
                })
                console.log(err)
            } else {
                console.log(results)
                if (results.length == 0) {
                    return res.status(401).send({
                        "message": "The entered credentials do not match"
                    })
                }
                // const match = await bcrypt.compare(userPassword, results[0].password)
                match = (userPassword == results[0].Password) && (userEmail == results[0].Email) 
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
    }
};
// exports.userLogin =  (req, res) => {
//     const userName = req.body.name
//     const userEmail = req.body.email
//     const userPassword = req.body.password
//     console.log(req.body)
//     connection.query(`select * from users where Email = "${userEmail}"`, async (err, results, field) => {
//         if (err) {
//             res.status(500).send({
//                 "message": "Server error"
//             })
//             console.log(err)
//         } else {
//             if (results.length == 0) {
//                 return res.status(401).send({
//                     "message": "The entered credentials do not match"
//                 })
//             }
//             // const match = await bcrypt.compare(userPassword, results[0].password)
//             console.log(results)
//             match = (userPassword == results[0].Password) && (userName == results[0].Name) && (userEmail == results[0].Email) 
//             if (match) {
//                 // req.session.userName = results[0].Name
//                 // res.status(200).send()
//                 res.render('userdash.hbs', {
//                     "user": results[0]
//                 })
//             } else {
//                 res.status(401).send({
//                     "message": "The entered credentials do not match"
//                 })
//             }
//         }
//     })    
// };
exports.userSignUp =  async (req, res) => {
    const userName = req.body.name
    const userEmail = req.body.email
    const userPassword = req.body.password
    const userGroup = req.body.group
    const userPhNo = req.body.PhNo
    const userAge = req.body.age
    const userGender = req.body.gender
    const userLocation = req.body.location
    const encryptedPassword = userPassword
    connection.query(`insert into users(Name, Email, Bgroup, PhNo, Age, Gender, Location, Password) Values ("${userName}", "${userEmail}", "${userGroup}", "${userPhNo}", "${userAge}", "${userGender}", "${userLocation}", "${encryptedPassword}")`, (err, results, field) => {
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
                        user: userName,
                        password: userPassword
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

exports.changePasswd = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    connection.query(`Select Password from users where Email = '${email}'`, async (err, results, fields) => {
        if (err) {
            res.status(500).send({
                "message": "Server error"
            })
            console.log(err)
        } else {
            console.log(results)
            if (results.length == 0) {
                res.redirect('/')
            }
            if(password == results[0].Password) {
                res.render('changePasswd.hbs', {
                    'email': email,
                    'password': password
                })
            }
            else {
                res.redirect('/')
            }
        }
    })
};
exports.viewUser = (req, res) => {
    const userEmail = req.body.userEmail
    const user = req.body.user
    const password = req.body.password
    console.log(user, password)
    connection.query(`select * from users where Email = "${userEmail}"`, async (err, results, field) => {
        if (err) {
            res.status(500).send({
                "message": "Server error"
            })
            console.log(err)
        } else {
            if (results.length == 0) {
                return res.status(401).send({
                    "message": "The entered user do not exist"
                })
            }
            res.render('viewUser', {
                result: results[0],
                'user': user,
                'password': password
            })
        }
    }) 
};
