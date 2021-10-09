const express=require('express');
const addRouter=express.Router();
 
function router(nav){
    addRouter.get('/',function(req,res){
        res.render("addauthor",
        {
            nav,
            title:'Library',
            
        })
    })
    addRouter.get('/addauthor',function(req,res){
       
        res.render("addauthor",
        {
            nav,
            title:'Library',
        })
    })
   
    return addRouter; 
}
module.exports=router;
