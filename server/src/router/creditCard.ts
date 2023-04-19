import { Request, Response, Router } from "express";
import {Card } from "../model/creditCard.model";
import CardService from "../service/creditCard.service";



export const getCardAll = async (req: Request, res: Response) => {
  const card = await CardService.getAll();
  return res.json(card);
};

export const getCardById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const card = await CardService.getByid(id);
  return res.json(card);
};


export const saveCard = async (req: Request, res: Response) => {
  const card = req.body;

  switch (card.negated) {
    case "sim":
      card.approved = card.score >= 750;
      break;
    case "não":
      card.approved = card.score > 300;
      break;
    default:
      return res.status(400).json({ message: "Invalid value" });
  }

  const createdCard = await CardService.create(card);
  return res.json(createdCard);
};

export const updateCard = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const card = await CardService.getByid(id);

    if (!card) {
      return res.status(404).send({ message: "Card not found" });
    }

    switch (req.body.negated.toLowerCase()) {
      case "sim":
        req.body.approved = req.body.score >= 750;
        break;
      case "não":
        req.body.approved = req.body.score > 300;
        break;
      default:
        return res.status(400).json({ message: "Invalid value" });
    }

    await CardService.update(id, req.body);
    res.status(200).send({ message: "successfully update card" });
  } catch (error: any) {
    res.status(400).send({ message: "card not found" });
  }
};

export const removeCard = async (req: Request, res: Response) => {
    const id = req.params.id;
    try{
      await CardService.delete(id)
      res.status(200).send({message:"successfully deleted card"})
    }catch(error: any){
      res.status(400).send({message: error.message});
    }
};

