const express = require('express');

const app = express();
app.get('/products/:category/:productId',(req,res) =>{
    res.send(`Product Details: Category- ${req.params.category} - ${req.params.productId}`)
});
app.get('/user',(req,res) =>{
    res.send({'userName' : 'Fareha','UserId':req.query.userId})
})
app.listen(7777,() =>{
    console.log('Server is running and listening on port 7777')
});
// get,post,put,delete - HTTP call

// app.get('/user',(req,res) =>{
//     res.send({'UserName' : 'Fareha'})
// })
// order of routes matters a lot - by default the / path is taken
/* 
app.use('/test',(req,res)=>{
    res.send('Hello from Server')
});
app.use('/hello',(req,res)=>{
    res.send('hello hello hello')
})
app.use('/xyz',(req,res)=>{
    res.send('hello hello hello')
})
app.use('/',(req,res) =>{
    res.send('Hello from dashboard')
}); 
app.use('/',(req,res) =>{
    res.send('Hello from dashboard')
}); 
// route path params and query params
app.get('/user/:userID',(req,res) =>{
    res.send({'userName' : 'Fareha','UserID':req.params.userID})
})
// optional parameters
app.get('/products/:productId?',(req,res) =>{
    res.send(`Product ID : ${req.params.productId || 'No product Id'}`)
});

app.get('/products/:category/:productId',(req,res) =>{
    res.send(`Product Details ${req.params.category} - ${req.params.}`)
});

app.post('/test',(req,res)=>{
    res.send('Data saved successfully')
});

*/