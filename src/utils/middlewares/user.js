const userAuth = (req,res,next) =>{
    const token = 'xyz'
    const isAuthorized = token === 'xy'
    if(!isAuthorized){
        res.status(401).send()
    }
    else{
        next()
    }
}

module.exports ={ userAuth}