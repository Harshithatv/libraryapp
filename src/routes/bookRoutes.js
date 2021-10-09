const express=require('express');
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Tom And Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom.jpg"
        },
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:"harry.jpg"
        },
        {
            title:'The Alchemist',
            author:'Paulo Coelho',
            genre:'Novel',
            img:"alchemist.jpg"
        },
        {
           title:'The Diary of a Young Girl',
           author:'Anne Frank', 
           genre:'Autobiography',
           img:"anne.jpg"
        },
        {
            title:'To Kill a Mockingbird',
            author:'Harper Lee', 
            genre:'Fiction',
            img:"mockingbird.jpg"
        },
        {
            title:'Wings of Fire',
            author:'A P J Abdul Kalam', 
            genre:'Autobiography',
            img:"wings of fire.jpg"  
        }
          
        
    
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        }
        );
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",
        {
            nav,
            title:'Library',
            book:books[id]
        })
    
    })
    return booksRouter;

}

module.exports=router;