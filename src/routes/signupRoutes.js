const express=require('express');
const signupRouter=express.Router();

 
function router(){
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            
            title:'Library'
            
        })
    })
    signupRouter.get('/signup',function(req,res){
        res.send("signin",
        {
            
            title:'Library'
        })

    })
    return signupRouter; 
}
module.exports=router;
