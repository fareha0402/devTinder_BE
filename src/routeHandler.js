const express = require('express')

const app = express()
const {adminAuth} = require('./utils/middlewares/auth')
const { userAuth } = require('./utils/middlewares/user')

app.use('/admin',adminAuth)

app.use('/admin/getAllData',(req,res,next)=>{
    res.send('All data sent')
})

app.use('admin/deleteUser', ()=>{
    res.send('User Deleted')
})

app.use('/user/login',(req,res) =>{
    res.send('Login successful!')
})
app.use('/user', userAuth,(req,res,next) =>{
    console.log('Request 1')
    next()
    res.send('1st request Sent!')
    next()
},
(req,res,next)=>{
console.log('Request 2')
    res.send('2nd request Sent!')
    next()
},
[(req,res,next)=>{
console.log('Request 3')
    res.send('3rd request Sent!')
},
(req,res,next)=>{
console.log('Request 4')
    res.send('4th request Sent!')
}]
)
app.use('/',(err,req,res,next) =>{
    if(err){
        res.status(500).send('somethinh went wrong!')
    }
})
app.listen(3333,() => {
    console.log('Server running on 3333')
})