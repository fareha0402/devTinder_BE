Chapter- 1
// npm init-- create repo and initialize the repo
//node modules, package.json vs package-lock.json
// Install and use express to create server
// package.json vs package-lock.json difference
// node module is a place where we have all the dependency that we downloaded from npm
// differnce between ~ and ^
//what are dependencies
// nodemon installation and update scripts inside package.json
// npm i -g nodemon ( use of -g )
// create a server using express
// Listen on port 
//Write request handlers for /test, /hello

chapter-2
// create git repo and push 
// write get,post,put,delete method
// rest api
// app.use vs app.get
// route with query params and path params and reading 
// postman testing
// route handlers /request handlers
// explore regex in route /a/,/.*fly$/ and use of ? ,+, (), * in routes
// play with routes /hello , /*fly /hello/2
// Order of routes matter
// dynamic routes reading

chapter-3 
// Multiple route handlers app.use('/user',rh1,[rh2,rh3],rh4)
//next()
// next function and errors along with res.send
// What is a middleware? Why do we need it
// How express handles the requests behind the scences
// Difference between app.use and app.all
// Write a dummy auth middleware for Admin
//  Write a dummy auth middleware for All user routes except /user/login
//Error handling using app.js
//try and catch use
// app.use('/',(error,req,res,next)=>{}) --> keep it at th end.