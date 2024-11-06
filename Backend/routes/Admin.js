import express from 'express';
import { isAdmin } from '../middleware/VerifyUser.js';
import { userModel } from '../models/user.js';

const AdminRouter = express.Router();

AdminRouter.get("/",isAdmin,async (req, res) => {
  try {
    const users=await userModel.find();
    res.send(users);

  } catch (error) {
    res.status(403).send({message:"something went wrong"})
  }
  
});

AdminRouter.delete("/delete/:userId", isAdmin, async (req, res) => {
  try {
    const userToDeleteId = req.params.userId;
    const adminId = req.user._id;

    // Check if the admin is trying to delete themselves
    if (userToDeleteId === adminId.toString()) {
      return res.status(403).send({ message: "Admin cannot delete itself" });
    }

    const deletedUser = await userModel.findByIdAndDelete(userToDeleteId);
    if (deletedUser) {
      return res.status(200).send({ message: "User deleted successfully" });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred, user not deleted" });
  }
});


export default AdminRouter;