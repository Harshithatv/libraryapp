const express=require('express');
const authorRouter=express.Router();
function router(nav){
    var details=[
        {
            name:'Joseph Barbera',
            famouswork:'Tom And Jerry',
            nationality:'American',
            img:"joseph.jpg"
        },
        {
            name:'Paulo Coelho',
            famouswork:'Alchemist',
            nationality:'Brazilian',
            img:"paulo.jpg"
        },
        {
            name:'Leo Tolstoy',
            famouswork:'Anna Karenina ',
            nationality:'Russian',
            img:"leo.jpg"  
        },
        {
            name:'Kamala Surayya',
            famouswork:'Ente Katha',
            nationality:'Indian',
            img:"kamala.jpg"  
        },
        {
            name:'Vaikom Muhammad Basheer',
            famouswork:'Balyakalasakhi',
            nationality:'Indian',
            img:"basheer.jpg"  
        },
        {
            name:'Arundhati Roy',
            famouswork:'The God of Small Things',
            nationality:'Indian',
            img:"arundhathi.jpg"  
        },
        


    
    ]
    authorRouter.get('/',function(req,res){
        
        res.render("authors",
        {
            nav,
            title:'Library',
            details
        }
        );
    });
    authorRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",
        {
            nav,
            title:'Library',
            author:details[id]
        })
    
    })
    return authorRouter;

}

module.exports=router;