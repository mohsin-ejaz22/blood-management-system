import { ObjectId } from "mongodb";
import User from "../models/UserModel.js";
import Userrequest from "../models/UserRequestModel.js";

export default {
  // for creating new request:
  async createuserrequest(req, res) {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const {
      Patientname,
      age,
      bloodgroup,
      disease,
      doctorname,
      address,
      mobile,
    } = req.body;

    const profilepic = req.files ? req.files.profilepic : null;
    const profilepicPath = profilepic
      ? `uploads/${Date.now()}${path.extname(profilepic.name)}`
      : null;

    try {
      const user = await User.findById(id);

      const newUserRequest = await Userrequest({
        Patientname,
        age,
        bloodgroup,
        disease,
        doctorname,
        address,
        mobile,
        profilepic:profilepicPath,
      });

      user.userrequests.push(newUserRequest);

      await newUserRequest.save();
      await user.save();
      if (profilepic) {
        await profilepic.mv(profilepicPath);
      }

      return res.status(201).json(newUserRequest);
    } catch (error) {
      console.log(error);
      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((err) => ({
          msg: err.message,
          path: err.path,
        }));

        return res.status(400).json({ errors });
      }
      return res.status(500).json({ errors: [{ msg: error.message }] });
    }
  },
// .............
  //   // For deleting userrequest:
  async deleteuserrequest(req, res) {
    const { id, userrequestId } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(400).json({ message: "Your user id is invalid!" });
    }
    if (!ObjectId.isValid(userrequestId)) {
      res.status(400).json({ message: "Your userrequest id is invalid!" });
    }

    try {
      await User.findByIdAndUpdate(id, { $pull: { userrequests: userrequestId } });
      await Userrequest.findByIdAndDelete(userrequestId);
      return res.status(200).json({ message: "Userrequest deleted successfully!" });
    } catch (error) {
      console.log("error in deleting Userrequest: ", error);
    }
  },
};
