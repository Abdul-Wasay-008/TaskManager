import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async Signup(signupDto: SignupDto): Promise<User> {
        const { name, email, password } = signupDto;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new this.userModel({
            name,
            email,
            password: hashedPassword,
        });

        // Save user to MongoDB
        return newUser.save();
    }

    //Login System
    async Login(loginDto: LoginDto): Promise<{ message: string }> {
        const { email, password } = loginDto;

        // Find the user by email
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        return { message: 'Login successful' };
    }
}
