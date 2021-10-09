const express=require('express');
const signinRouter=express.Router();

 
function router(){
    signinRouter.get('/',function(req,res){
        res.render("signin",
        {
            
            title:'Library'
            
        })
    })
    signinRouter.get('/signin',function(req,res){
        res.send("index",
        {
            
            title:'Library'
        })

    })
    return signinRouter; 
}
module.exports=router;
