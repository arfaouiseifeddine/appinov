const mongoose = require("mongoose")


const Schema= mongoose.Schema

const galerySchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        
           ref:'User',
           
    },

    

    
     title: {
    type: String,
    required:true,
                },

    prix: {
    type: String,
    required:true,
    },

    picture: {
    type: String,
    required:true,
    },

    discreption: {
      type: String,
    required:true,
        },

        

    date:{
    type:Date,
    default:Date.now()
        },

    
})

module.exports = Galery = mongoose.model('Galery', galerySchema);