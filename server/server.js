const uri = "mongodb://localhost:27017/postmanhackathon"
const express = require('express')
const bodyParser = require('body-parser')
const md5 = require('md5');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors')



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

mongoose.connect(uri);
mongoose.connection.on('connected', ()=>{
    console.log('connected successfully');
});
let allDocuments = {}



const signupSchema = new mongoose.Schema({
    userName: String,
    emailID: String,
    password: String,

})

const blogschema  = new mongoose.Schema({
    blogTitle: String,
    blogAuthor: String,
    blogBody: String,

})

const User = mongoose.model('User', signupSchema);
const BlogPost = new mongoose.model('BlogPost', blogschema);

async function getList(){
    allDocuments = await BlogPost.find()
    console.log(allDocuments);

    

};

getList();




app.post('/signup',function(req, res){

    const userName = req.body.userName
    const emailID = req.body.emailID
    const password = md5(req.body.password)
    console.log(password);
    const newUser = new User({
        userName : userName,
        emailID : emailID,
        password : String(password)
    })
    newUser.save();

    res.redirect('http://localhost:3000');

})

app.get('/', function(req,res){
    res.send("Hello world");
    console.log('Hello')

})

app.post('/blogpost', (req, res) => {
    const blogTitle = req.body.blogTitle
    const blogBody = req.body.blogBody
    const blogAuthor = req.body.blogAuthor

    const newBlogPost = new BlogPost({
        blogTitle: blogTitle,
        blogAuthor: blogAuthor,
        blogBody: blogBody

    })
    newBlogPost.save()
    getList();

    res.redirect('http://localhost:3000/blog')

})



app.listen(5000, ()=>{
    console.log('listening to port 5000');

})



app.get('/blogs', (req, res) => {
    res.send(allDocuments);

})







