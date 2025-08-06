import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name length must be at least 3 characters long"],
        maxlength: [20, "Name length must be at less than 20 characters long"],
    },
    username: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name length must be at least 3 characters long"],
        maxlength: [20, "Name length must be at less than 20 characters long"],
    },
    Password: {
        type:String,
        required: [true, "Password is required"],
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
    mobile: {
        type: String,
        required: [true, "mobile is required"],
    },
})

const User = mongoose.model("User", userschema);
export default User;







