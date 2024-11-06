import jsonwebtoken from 'jsonwebtoken';
import { userModel } from '../models/user.js';

export const isAdmin=async(req,res,next)=>{
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    // console.log(token);

    if (token) {
      const decoded = jsonwebtoken.verify(token, "karan@123");

      const { _id } = decoded;
      const user = await userModel.findById(_id);
      if (!user) {
        throw new Error("User is not in db");
      }

      if(user.role!== "admin"){
        return res.status(403).json({message:"unauthorized :User is not a admin"})
      }

      req.user = user;
      next();
    } else {
      res.status(401).send("Unauthorized request");
    }
    
  } catch (error) {
    res.status(401).send("Unauthorized request");
    
  }
}


