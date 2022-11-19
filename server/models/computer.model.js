const mongoose = require('mongoose')

const ComputerSchema = new mongoose.Schema({

    price: 
    {  
        type: Number
    },

    Mutant: 
    {  
        type: String
    },

    image: 
    {  
        type: String
    },

    quantity:
    {
        type: Number,
        required: true,
        min: [1, 'Only one of this product is available'],
        default: 1
    },

    cpu: 
    {  
        type: String,
        required : [true, "CPU is required"]
    },

    gpu:
    {  
        type: String,
        required : [true, "GPU is required"]
    },

    ram:
    {  
        type: String,
        required : [true, "RAM is required"]
    },

    storage:
    { 
        type: String,
        required : [true, "Storage is required"]
    },

    cooling:
    {  
        type: String,
        required : [true, "Cooler is required"]
    },

    psu:
    {
        type: String
    },

    motherboard:
    {
        type: String
    },

    case:
    {
        type: String
    },

    accessories:
    {
        type: String
    },

    createdBy: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });


module.exports = mongoose.model('Computer', ComputerSchema);