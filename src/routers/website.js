const express = require('express');

const router = new express.Router()

router.get('', (req, res) => {
    res.render('index.hbs')
})

router.get('/userlogin', (req, res) => {
    res.render('userlogin.hbs')
})
router.get('/usersignup', (req, res) => {
    res.render('usersignup.hbs')
})

router.get('/bloodbanklogin', (req, res) => {
    res.render('bloodbanklogin.hbs')
})
router.get('/bloodbanksignup', (req, res) => {
    res.render('bloodbanksignup.hbs')
})
router.get('/changePasswd', (req, res) => {
    res.render('changePasswd.hbs',
    {email: req.body.result.Email})
})

router.get('/welcome', (req, res) => {
    res.render('welcome.hbs', {
        "user": "demo user"
    })
})

module.exports = router