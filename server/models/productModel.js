import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
   name: { type: String, required: true },
   rating: { type: Number, required: true },
   comment: { type: String , required:true },
   user: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User',
    }
},{
     timestamps: true
})

const productSchema = new mongoose.Schema( {
 user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User'
 } ,
 title: {
    type: String,
    required:true
  },
 images: {
    type: String,
    required:true
 },
 brand: {
    type: String,
    required:true
 },
 category: {
    type: String,
    required:true
 },
 description: {
    type: String,
    required:true
 },
 reviews: [reviewSchema],
 rating: {
    type: Number,
    required:true, 
 }, 
 comment: {
    type: String, 
    default: 0
 },
 numReview: {
    type: Number,
    required:true, 
    default: 0
 },
 price: {
    type: Number,
    required:true, 
    default: 0
 },
 stock: {
    type: Number, 
    default: 0
 }, 
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product
