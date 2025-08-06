import mongoose, {Schema} from "mongoose";
import Userrequest from "./UserRequestModel.js";

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
    password: {
        type:String,
        required: [true, "Password is required"],
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
    mobile: {
        type: Number,
        required: [true, "mobile is required"],
    },
    userrequests: [
        {
          type: Schema.Types.ObjectId,
          ref: "Userrequest",
        },
      ],
})

userschema.post("findOneAndDelete", async(user)=>{
    if(user){
      await Userrequest.deleteMany({_id: {$in: user.userrequests}});
    }
  });


const User = mongoose.model("User", userschema);
export default User;







