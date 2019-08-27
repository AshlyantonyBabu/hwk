var mong=require('mongoose')
var addschema=mong.Schema
var itemschema=new addschema({

    itemname:{type:String,required:true},
    itemprice:{type:Number,required:true},
    itemqty:{type:Number,required:true},
    

})


var itemmodel=mong.model("prd",itemschema,"items")
module.exports=itemmodel 