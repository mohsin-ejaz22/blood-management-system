import User from "../models/UserModel.js"
import { ObjectId } from "mongodb";

export default{

    // Add New user:
    async createUser(req, res){
        const {name, username, password, address, mobile} = req.body;
        try{
            const newUser = new User({name, username, password, address, mobile});
            await newUser.save();

            return res.status(201).json(newUser);
        }catch(error){
            if(error.name === "ValidationError"){
                const errors = Object.values(error.errors).map(err => ({ msg : err.message, path: err.path}));

                return res.status(400).json({errors});

            }
            return res.status(500).json({errors: [{msg: error.message}] });
        }
    },

    // Show all all users:
    async showUsers(req, res){
        const users = await User.find({});
        return res.json({data: users});
    },

    // Show single user by id:
    async showUser(req, res){
        const {id} = req.params;

        if(!ObjectId.isValid(id)){
            return res.status(400).json({message: "Invalid User ID"});
        }
        const user = await User.findOne({_id: new ObjectId(id)});
        if(!user){
            res.status(404).json({message: "User is not found!"});
        }
        res.status(200).json({data: user});
    },

    // Update the existing User:

    async editUser (req, res) {
        
        const {id} = req.params;
        
        const {name, username, password, address, mobile} = req.body;
        
        if(!ObjectId.isValid(id)){
            return res.status(400).json({message: "Invalid User ID"});
        }

        try{
            const existingUser = await User.findById(id);

            if(!existingUser){
                return res.status(404).json({message: "User not found"})
            }
            
            existingUser.name = name;
            existingUser.username = username;
            existingUser.password = password;
            existingUser.address = address;
            existingUser.mobile = mobile;

            await existingUser.save();

            return res.status(200).json({message: "User updated successfully!"})
        }catch(error){
            if(error.name === "ValidationError"){
                const errors = Object.values(error.errors).map(err => ({ msg : err.message, path: err.path}));

                return res.status(400).json({errors});

            }
            return res.status(500).json({errors: [{msg: error.message}] });
            
        }
    },

    // Delete the existing User:
    async deleteUser(req, res){
        const {id} = req.params;
        
        if(!ObjectId.isValid(id)){
            res.status(400).json({message: "Your User id is invalid!"})
        }

        try{
            const existingUser = await User.findById(id);
        
        const user = await User.deleteOne({_id: new ObjectId(id)});
        return res.status(200).json({message: "User deleted successfully!"});
    } catch(error){
        console.log('error in deleting User: ', error);
    }
}
}
  