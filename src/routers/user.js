const express = require('express');
const router = new express.Router()
const {connection, mysql} = require('../db/sql')
const userController = require('../controllers/userController');

router.post('/api/userLogin', userController.userLogin)
router.post('/api/userSignUp', userController.userSignUp)
router.post('/api/bloodBankLogin', userController.bloodBankLogin)
router.post('/api/bloodBankSignUp', userController.bloodBankSignUp)
router.post('/api/unregister', userController.unregister)
router.post('/changePasswd', userController.view)
router.post('/editInfo', async (req, res) => {
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
                res.render('editInfo.hbs', {
                    'email': email,
                    'password': password
                })
            }
            else {
                res.redirect('/')
            }
        }
    })
})

// router.get('/dashboard/:email', async (req, res) => {
//     const finish = () => {
//         console.log("done")
//     }
//     await setInterval(finish, 3000)
//     res.redirect('../')
// })
router.get('/logout', (req, res) => {
    res.render('')
})

module.exports = router
