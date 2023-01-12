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
router.get('/logout', (req, res) => {
    res.redirect('/')
})

router.get('/adminLogin', userController.adminLogin)
router.post('/adminPage', userController.adminPage)
router.post('/adminViewAllUser', userController.adminViewAllUser)
router.post('/adminViewBloodBank', userController.adminViewBloodBank)
router.post('/adminViewUser', userController.adminViewUser)



module.exports = router
