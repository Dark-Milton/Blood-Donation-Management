const express = require('express');

const router = new express.Router()



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

module.exports = router