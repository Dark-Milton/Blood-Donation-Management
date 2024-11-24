const mysql = require('mysql')
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : 'admin',
    database: 'blood_donation',
    port :3307, //XAMPP Port
})
connection.connect(function(err) {
    if(err) {
        console.log("Not connected")
        throw err
    }
    console.log("Connected")
})

module.exports = {connection, mysql}
