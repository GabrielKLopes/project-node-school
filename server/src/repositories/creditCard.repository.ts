import { Card } from "../model/creditCard.model"

class CreditCard{
    getAll(){
        return Card.find();
    };
    getByid(id: string){
        return Card.findOne({_id: id})
    }
    create(creditCard: typeof Card){
        return Card.create(creditCard);
    }
    update(id: string, creditCard: Partial<typeof Card>) {
        return Card.updateOne({ _id: id }, { $set: creditCard });
      }

    remove(id: string){
        return Card.deleteOne({_id: id}, {remove: true});

    }
}

export default new CreditCard