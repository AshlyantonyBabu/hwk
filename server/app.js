var exp=require('express')
const app=exp();
var bdy=require('body-parser')
app.use(bdy.urlencoded({extended:true}))
app.use(bdy.json())
var mon=require('mongoose')
var url="mongodb+srv://ashly:ashly@cluster0-nybb2.mongodb.net/prd?retryWrites=true&w=majority"
var model=require('../server/model/prd')
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();

});
mon.connect(url,function(err){
    if(err)throw err
    else{
        console.log("database connected")
    }

})
app.get("/data",function(req,res){
    res.send([{name:"anu",age:34,msg:"passed"},{name:"rani",age:24,msg:"data"}])
})

app.get("/add",function(req,res){
    //model.insertOne({itemname:"ashly",itemprice:677,itemqty:25})
    var m=new model();
    m.itemname="printer"
    m.itemprice=6230
    m.itemqty=2
    m.save(function(err){
        if(err)throw err
        else{
            console.log("data added")
        }
    })
})
app.get("/view",function(req,res){
    model.find({},function(err,result){
        if(err)throw err
        else{
            res.send(result)
        }
        
    })
})
app.listen(2000,function(req,res){
    console.log("server started")
});