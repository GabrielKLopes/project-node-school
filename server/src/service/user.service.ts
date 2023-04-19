import newUser from '../repositories/user.repository';
import {IUser, User} from '../model/user.model'
import bcrypt from 'bcrypt'
import  Jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SCRET_KEY || "";

class UserService{
   getAll(){
      return newUser.getAll();
    };
    getByid(document: string){
      return newUser.getByDocument(document);
    };
    async create(user: IUser){
       if(user.password){
         user.password = await bcrypt.hash(user.password, 10);
       }
       return newUser.create(user);
    };

    async authorization(document: string, password:string){
      const user = await newUser.getByDocument(document);
      if(!user)  throw new Error ('User not found');

     const result = await bcrypt.compare(password, user.password);


     if(result){
        return Jwt.sign({document: user.document, _id: user._id},secretJWT,{
         expiresIn: '1h'
       } );
     };

      throw new Error ('Incorrect username or password');
    }

    update(document: string, user: Partial <IUser>){
       return newUser.update(document, user);
    }

    delete(document: string){
       return newUser.remove(document);
    }
       
}

export default new UserService();