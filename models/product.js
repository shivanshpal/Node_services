const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    skucode:{
        type:String,
        required:true,
        unique:true
    },
    modelno:{
        type:Number,
        required:true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    delivery:{
        type:Number,
        required:true
    },
    description:{
        type: String,
    },
    stock:{
        type: Boolean,
        required:true
    },
});

const Product=mongoose.model('Product',productSchema);

module.exports=Product;
