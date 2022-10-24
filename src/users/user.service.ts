import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { FilterQuery, Model } from "mongoose";
import { UserRepository } from "./user.repository";
import { v4 as uuidv4 } from 'uuid';

@Injectable()

export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find({});
    }
    async createUser(name:string): Promise<User> {
        return this.userRepository.create({
            userId: uuidv4(),
            name
        })
    }
}