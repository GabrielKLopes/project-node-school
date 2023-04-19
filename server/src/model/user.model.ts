import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser{
    name: string;
    lastName: string;
    document: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;

}

export const userSchema  = new Schema <IUser>({
    name:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    document:{
        type: String,
        required: true,
        
    },
    password:{
        type: String,
        required: true,               
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updatedAt:{
        type: Date,
        default: new Date
    }
});

export const User = mongoose.model<IUser>("User", userSchema);