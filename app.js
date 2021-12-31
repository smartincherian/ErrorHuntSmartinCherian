const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');



const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
// Part #1 Point 3
// Part #2 Point 6
const homeRouter = require('./src/routes/homerouter')(nav);
const booksRouter = require('./src/routes/booksroute')(nav);
const authorsRouter = require('./src/routes/authorsroute')(nav);

const app = new express; 

// Part #2 Point 7
app.use(cors());


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

// Part #1 Point 2
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(process.env.PORT || 5000,()=>{
// Part #1 Point 5
    console.log("Server Ready on 5000");
});
