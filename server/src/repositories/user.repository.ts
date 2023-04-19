import { IUser, User } from "../model/user.model";

class newUser{
    getAll(){
        return User.find();
    };
    getByDocument(document: string){
        return User.findOne({document})
    }
    create(user: IUser){
        return User.create(user);
    }
    update(document: string, user: Partial <IUser>){
        return User.updateOne({document, user: User}, {$set: user});
    }

    remove(document: string){
        return User.deleteOne({document}, {remove: true});

    }
}

export default new newUser;