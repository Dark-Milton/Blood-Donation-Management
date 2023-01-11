const express = require('express');
const router = new express.Router()
const {connection, mysql} = require('../db/sql')
const userController = require('../controllers/userController');

router.post('/api/userLogin', userController.userLogin)
router.post('/api/userSignUp', userController.userSignUp)
router.post('/api/bloodBankLogin', userController.bloodBankLogin)
router.post('/api/bloodBankSignUp', userController.bloodBankSignUp)
router.post('/api/unregister', userController.unregister)
router.post('/changePasswd', userController.changePasswd)
router.post('/viewUser', userController.viewUser)
router.post('/editInfo', userController.editInfo)
router.get('/logout', (req, res) => {
    res.render('')
})

module.exports = router
