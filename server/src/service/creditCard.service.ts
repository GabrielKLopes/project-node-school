import CreditCard from "../repositories/creditCard.repository";
import {ICard, Card } from "../model/creditCard.model";

class CardService{
    getAll(){
        return CreditCard.getAll();
      };
      getByid(id: string){
        return CreditCard.getByid(id);
      };
      create(creditCard: typeof Card){
         return CreditCard.create(creditCard);
      };
      update(id: string, creditCard: Partial <typeof Card>){
         return CreditCard.update(id, creditCard);
      }
 
      delete(id: string){
         return CreditCard.remove(id);
      }
       
}

export default new CardService();