import { Request, Response, Router } from "express";
import userService from "../service/user.service";
import {User} from ".././model/user.model";


const router = Router();


export const getUserAll = async (req: Request, res: Response) => {
  const user = await userService.getAll();
  return res.json(user);
};

export const getUserById =  async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userService.getByid(id);
  return res.json(user);
};


export const saveUser = async (req: Request, res: Response) => {
  const existingUser = await userService.getByid(req.body.document);
  if (existingUser) {
    return res.status(400).json({ message: "Document already exists" });
  }
  const user = await userService.create(req.body);
  return res.json(user);
};

export const authorization = async (req: Request, res: Response) => {
  try{
    const token = await userService.authorization(req.body.document, req.body.password)
    res.status(200).send({token});
  }catch(error: any) {
     res.status(401).send({message: error.message});
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const document = req.params.id;
  try{
    const user = await userService.getByid(document);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    await userService.update(document, req.body)
    res.status(200).send({message:"successfully update user"})
  }catch(error: any){
    res.status(400).send({message: error.message});
  }
};

export const removeUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await userService.getByid(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    await userService.delete(id);
    res.status(200).send({ message: "Successfully deleted user" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};