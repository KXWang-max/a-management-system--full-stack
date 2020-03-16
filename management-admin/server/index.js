// ps. use 'npm install -g nodemon' and then use 'nodemon server' to run the backend file 
// you will find that when you save this file ,the file will be run automatically , it's better than 'node server/index.js'


const express = require('express');
const app = express();
//allow cross-domain   (because the backend file is 3001 but the frontend files is 8080 in this project)
app.use(require('cors')());
// let 'express' to iditify the json which is submitted by backend
app.use(express.json())
//connect mongodb      (those parameters are necessary)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/management-admin',{
    useFindAndModify:true,
    useCreateIndex:true,
    useNewUrlParser:true,
    //current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    useUnifiedTopology: true
})
//creat a db-model     (must statement types)
const Article = mongoose.model('Article',{
    title:{ type: String },
    content:{ type: String }
})


//creat/submit a new article
app.post('/api/article',async (req,res)=>{
    const article = await Article.create(req.body)
    res.send(article) 
})
//'get' test
app.get('/',async (req,res)=>{
    res.send('index')
})

//listen on port3001
app.listen('3001',()=>{
    console.log('http://localhost:3001/')
})