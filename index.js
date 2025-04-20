const mongoose = require("mongoose");

 main()
 .then(() => {
    console.log("connection successfully");
 })
  .catch((err) => console.log(err));

 async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
 }

 const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    age: Number,
 });

const User = mongoose.model("User", userSchema);

// const user2 = new User({
//     name:"ashu2",
//     email:"ashwini701@gmail.com",
//     age:45,
// });

// user2.save()
// .then((res)=>{
//     console.log(res);

// }) 
// .catch((err)=> {
//     console.log(err);
// });

// User.insertMany([
//     {name:"ash", email:"kangane@gmail.com", age:65},
//     {name:"priyansh", email:"sanap@gmail.com", age:45},
//     {name:"shreyansh", email:"gange@gmail.com", age:55},

// ]).then((res)=>{
//     console.log(res);
// });

// User.findById("6804c130062304e1b678df38")
// .then((res)=>{
// console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateOne({name:"priyansh"},{age:99})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:{$gt:55}},{age:99})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"priyansh" },{age:34} ,{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.log(err)
// });

// User.deleteOne({name:"priyansh" })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.log(err)
// });

// User.deleteMany({ age:45 })
// .then((res)=>
// {
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err)
// });

User.findByIdAndDelete("6804c130062304e1b678df39")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});