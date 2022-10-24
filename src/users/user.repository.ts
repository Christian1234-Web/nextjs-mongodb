import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()

export class UserRepository {
    constructor(@InjectModel(User.name) private useModel: Model<UserDocument>) { }

    async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
        return this.useModel.find(usersFilterQuery)
    }
    async create(user: User): Promise<User> {
        const newUser = new this.useModel(user);
        return newUser.save()
    }
}