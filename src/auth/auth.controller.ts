import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard'; 
import { Body, Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { RefreshDto } from './dto/refresh.dto';
import { Public } from './decorators/public.decorator';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Public()
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }
  @Public()
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Public()
  @Post('refresh')
  refresh(@Body() dto: RefreshDto) {
    return this.authService.refresh(dto.refreshToken);
  }
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(
    @Req() req: {
      user: {
        id: number;
        email: string;
        roles: string[];
      };
    },
  ) {
    return this.authService.logout(req.user.id);
  }
  @Get('me')
  getme(
    @Req() 
   req:{
    user: {
      id: number;
      email: string;
      roles: string[];
    };
  },
  ) {
    return req.user;
  }
}
