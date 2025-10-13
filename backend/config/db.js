import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ksaran0006_db_user:fooddel@cluster0.uj9pwnz.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
   
}

