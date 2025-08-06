import mongoose from "mongoose";

const userrequestschema = new mongoose.Schema({

    Patientname: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name length must be at least 3 characters long"],
        maxlength: [20, "Name length must be at less than 20 characters long"],
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
    },
    bloodgroup: {
        type: String,
        required: [true, "bloodgroup is required"],
    },
    disease
        : {
        type: String,
        required: [true, "Disease is required"],
    },

    doctorname: {
        type: String,
        default: "Unknown"
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
    mobile: {
        type: Number,
        required: [true, "mobile is required"],
    },

    profilepic: {
        type: String,
        required: [true, "profilepic is required"],
    },
})

const Userrequest = mongoose.model("Userrequest", userrequestschema);
export default Userrequest;
