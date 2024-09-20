import { Controller, Post, Body, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signUp(@Body() signupDto: SignupDto) {
        return this.authService.Signup(signupDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.Login(loginDto);
    }
}



