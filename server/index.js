import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://quanganh04012000:Nhoxanh2233@cluster0.giulr.mongodb.net/Blog'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true,limit: '30mb'}));
app.use(cors());


app.use('/posts',posts);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then (()=>{
    console.log('Connected to DB');
}).catch(err => {
    console.log('err',err)
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});