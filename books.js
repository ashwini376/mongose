const mongoose = require("mongoose");

 main()
 .then(() => {
    console.log("connection successfully");
 })
  .catch((err) => console.log(err));

 async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
 }

 const booksSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    } ,
    author: {
        type: String
    },
    price: {
        type: Number
    },
 });

 const Book = mongoose.model("Book", booksSchema);

 let book1 = new Book({
    title:"math",
    author:"RD Sharma",
    price: 77,
 });
 book1.save()
 .then((res) =>{
    console.log(res)
 })
 .catch((err)=>{
    console.log(err);
 });