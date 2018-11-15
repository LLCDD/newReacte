var express = require('express')
var mongodb = require('mongodb').MongoClient;
var app = express()
var db_str="mongodb://localhost:27017/xxy"

//注册
app.get('/register',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    console.log(req.query)
    var password = req.query.password;
    var username=req.query.username;
    
    mongodb.connect(db_str, (err, database) => {
        database.collection('user', (err, coll) => {
            coll.find({username:username}).toArray((err,data)=>{
                if (data.length > 0) {
                    res.send('用户名已经存在')
                    database.close()
                } else {
                    coll.save({username: username,password: password},()=>{
                        res.send('1')
                        database.close()
                    })
                }
            })
        })
    })
    
})
//登录
app.get('/login',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    console.log(req.query)
    mongodb.connect(db_str,(err,database)=>{
        database.collection('user',(err,coll)=>{
            coll.find(req.query).toArray((err,data)=>{
                if(data.length>0){
                    res.send('1');
                }else{
                    res.send('0');
                }
                database.close();
            })
        });
    });
});










app.listen(8000)