const express = require('express');
const router = new express.Router()
const {connection, mysql} = require('../db/sql')
const userController = require('../controllers/userController');

router.get('', (req, res) => {
    connection.query(`select Name, Bgroup from users LIMIT 7`, async (err, result, field) => {
        connection.query(`select * from faq`, async (err, results, field) => {
            res.render('index.hbs', {
                'result': result,
                'faq': results
            })
        }) 
    })
}) 


router.post('/api/userLogin', userController.userLogin)
router.post('/api/userSignUp', userController.userSignUp)
router.post('/api/bloodBankLogin', userController.bloodBankLogin)
router.post('/api/bloodBankSignUp', userController.bloodBankSignUp)
router.post('/api/unregister', userController.unregister)
router.post('/changePasswd', userController.changePasswd)
router.post('/viewUser', userController.viewUser)
router.post('/editInfo', userController.editInfo)
router.post('/userReqPage', userController.userReqPage)
router.get('/contact', (req, res) => {
    res.render('contactPage')
})
router.post('/contact', (req, res) => {
    const userName = req.body.name
    const userType = req.body.type
    const userPhNo = req.body.phno
    const userMessage = req.body.message
    if(userName != '' && userType != '' && userPhNo != '' && userMessage != '')
        connection.query(`insert into Contact_Us(Name, Type, PhNo, Message) Values ("${userName}", "${userType}", "${userPhNo}", "${userMessage}")`, (err, results, field) => {
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
            }
        })
    res.render('contactPage')
})
router.get('/logout', (req, res) => {
    res.redirect('/')
})

router.get('/adminLogin', userController.adminLogin)
router.post('/adminPage', userController.adminPage)
router.post('/adminViewAllUser', userController.adminViewAllUser)
router.post('/adminViewBloodBank', userController.adminViewBloodBank)
router.post('/adminViewUser', userController.adminViewUser)

router.post('/reqPage', userController.reqPage)

module.exports = router
