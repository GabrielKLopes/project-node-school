import mongoose, { Schema } from "mongoose";
import { Mongoose} from "mongoose";


export interface ICard{
    payment: string;
    occupation:string;
    document:string;
    nationalId: string;
    birthday:string;
    invoice:number;
    passwordCard:number;
    address:string;
    number: number;
    ZipCode:string;
    score:number;
    negated: string;
    approved:boolean;
    createdAt:Date;
    updatedAt:Date;
}

export const cardSchema = new Schema({
    payment:{
        type: "String",
        required: true,
       
    },
    occupation:{
        type: "String",
        require: true,
    },
    document:{
        type: "String",
        required: true,
        
    },
    nationalId:{
        type: "String",
        required: true,
       
    },
    birthday:{
        type: "String",
        required: true,
        
    },
    invoice:{
        type: Number,
        required: true,
       
    },
    passwordCard:{
        type:Number,
        required: true,
       
    },
    address:{
        type: "String",
        required: true,
       
    },
    number:{
        type: Number,
        required: false,
      
    },
    ZipCode:{
        type: "String",
        required: true,
       
    },
    score:{
        type: Number,
        required: true,
    },
    negated:{
       type: "String",
       required: true
    },
    approved:{
        type: Boolean,
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updatedAt:{
          type: Date,
          default: new Date()
    }

});

export const Card  = mongoose.model<ICard>('Card', cardSchema);