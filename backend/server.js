const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt');
require('dotenv').config();
app.use(cors())
app.use(express())
app.use(bodyParser.json())

const mongoUrl = process.env.MONGO_URL
const port = process.env.PORT || 8000

mongoose.connect(mongoUrl).then(() => {
    console.log("Connected mongo")
    error => console.log(error)
})

const Post = mongoose.model("Post", {
    title:String,
    content:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
});

const User = mongoose.model("User",userSchema);


//Authentication
app.get("/signin",(req,res) => {

})

app.post("/register",async (req,res) => {
    const {username,password} = req.body;
    try{
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new User({username:username,password:hashPassword});
        const saveUser = await newUser.save();
        res.status(200).json({message:"Added"})
    }catch (e) {
        res.status(500).json({error:e})
    }
});

app.post("/login",async (req,res) => {
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username:username});
        if(user){
            await bcrypt.compare(password,user.password,(err,result) => {
                if(result){
                    res.status(200).json({message:"Matched"})
                }
                else{
                    res.status(401).json({message:"Bad Auth"})
                }
            });
        }
        else{
            res.status(404).json({message:"User not found"})
        }
    }catch (e) {
        res.status(500).json({error:e})
    }
});

app.get("/",(req,res) => {
    res.send("Hello World!")
})

app.get("/allPosts",async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (e) {
        res.status(500).json({error:e.message});
    }
});

app.post("/addPost",async (req,res) => {
    try{
        const post = new Post(req.body);
        const savePost = await post.save();
        res.status(200).json({post:post});
    }catch (e) {
        res.status(500).json({error:e.message})
    }
})

app.get("/post/:id",async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post);
    }catch (e) {
        res.status(500).json({error:e.message});
    }
})



app.listen(port,() => {
    console.log(`Listening on ${port}`);
})