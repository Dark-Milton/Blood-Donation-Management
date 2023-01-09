const express = require('express');
const router = new express.Router()
const {connection, mysql} = require('../db/sql')
const userController = require('../controllers/userController');

router.post('/api/userLogin', userController.userLogin)
router.post('/api/userSignUp', userController.userSignUp)
router.post('/api/bloodBankLogin', userController.bloodBankLogin)
router.post('/api/bloodBankSignUp', userController.bloodBankSignUp)
router.post('/api/unregister', userController.unregister)
router.get('/changePasswd/:email', userController.view)
router.post('/changePasswd/', userController.changePasswd)
router.get('/editInfo/:email', async (req, res) => {
    const Email = req.params.email
    res.render('editInfo.hbs', {
        email: Email
    })
})
router.post('/editInfo', async (req, res) => {
    const email = req.body.email
    let age = req.body.age
    let gender = req.body.gender
    let location = req.body.location
    // res.sendStatus(200)
    connection.query(`Select * from users where Email = '${email}'`, async (err, results, fields) => {
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
            connection.query('UPDATE users SET Age = ?, Gender = ?, Location = ? WHERE Email = ?', [age, gender, location, email], (err, results, field) => {
                if (err) {
                    console.log(err)
                    res.status(500).send({
                        "message": "Server error"
                    })
                } 
                else {
                    const finish = () => {
                        res.redirect('/userlogin')
                    }
                    setTimeout(finish, 2000)
                }
            })
        }
    })
})
router.get('/dashboard', (req, res) => {
    res.redirect('../')
})
router.get('/logout', (req, res) => {
    res.render('')
})

module.exports = router
