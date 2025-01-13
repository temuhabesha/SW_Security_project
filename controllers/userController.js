// module importing starting point
const mysql = require('mysql2')
// module importing ending point

//database connectivity
const db_connection = mysql.createConnection({
    host:"localhost",
    database:"sw_security_db",
    user:"sw_security_db_admin",
    password:"12345"
}).promise()



// regstration function starting point
async function register(req,res){
    const {username,firstname,lastname,email,password} = req.body;

   if(!username || !firstname || !lastname || !email || !password){
    return res.send('please enter all fields')
   }
   
   try {
    const [result] = await db_connection.query('SELECT username,id FROM system_users WHERE username=? or email=?',[username,email])
    if(result.length>0){
        return res.send('the user already registered')
    }
    if(password.length<6){
       return res.send('the password at least 8 characters')
    }
         db_connection.query('INSERT INTO system_users (username,firstname,lastname,email,password) VALUES (?,?,?,?,?)',[username,firstname,lastname,email,password])
        return res.send('the user is registered')
   } catch (error) {
    return res.send(error)
   }
         
       
        
    
}

async function login(req,res) {
    const {email,password} = req.body;
   if(!email || !password){
    return res.send('please fiel all required fields')
   }
   try {
    const [user] = await db_connection.query('SELECT id,username,password FROM system_users WHERE email=?',[email])
    if(user.length===0){
          return res.send('invalid cridential')
    }
    const userpassword = user[0].password
    if(password === userpassword) {
        return res.send('login successfully')
    }
    else{
        return res.send('invalid cridential')
    }
   }
    catch (error) {
    return res.send(error)
   }
    
}
// registration function ending point

module.exports = {register,login};