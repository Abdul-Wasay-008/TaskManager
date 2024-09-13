import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signUp(@Body() signupDto: SignupDto) {
        console.log('Signup request received:', signupDto);
        return this.authService.Signup(signupDto);
    }
}
