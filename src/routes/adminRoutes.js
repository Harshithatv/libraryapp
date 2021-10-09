const express=require('express');
const adminRouter=express.Router();
 
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav,
            title:'Library',
            
        })
    })
    adminRouter.get('/addbook',function(req,res){
       
        res.render("addbook",
        {
            nav,
            title:'Library',
        })
    })
    return adminRouter; 
}
module.exports=router;
