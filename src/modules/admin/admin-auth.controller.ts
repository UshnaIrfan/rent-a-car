import { Controller, Get, Post, Body, Patch,Delete, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import paginationUserInterface from "../auth/interfaces/pagination-user.interface";
import updateUserInterface from "../auth/interfaces/update-user.interface";
import { User } from "../users/schemas/user.schema";
import {AuthService} from "../auth/auth.service";
import {updateUserDto} from "../auth/dto/update-user.dto";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import { JwtAuthGuard } from "../auth/guards/jwt-auth-guard";


@ApiTags('admin')
@Controller('admin')
export class adminAuthController {
  constructor(private readonly authService:AuthService) {}



      //get all users and search by name
      @ApiBearerAuth()
      @ApiQuery({ name: 'username', required: false })
      @Get('user/search')
      @Roles(Role.L2A_ADMIN)
      async getReview(@Query('page') page: number = 1,@Query('username')username?: string):Promise<paginationUserInterface>
      {
         return this.authService.getAllUsers(page,username);
      }




       //update user
      @ApiBearerAuth()
      @ApiBody({type:updateUserDto})
      @Patch('user/update')
      @Roles(Role.L2A_ADMIN)
      async updateUser(@Body() updateUserDto:updateUserDto):Promise<{ message: string, update:updateUserInterface}>
      {
          return this.authService.updateUser(updateUserDto);
      }



      //delete user with review
      @ApiBearerAuth()
      @Delete('user/delete')
      @Roles(Role.L2A_ADMIN)
      async deleteUser(@Query('id') id:string):Promise<{message: string, deletedUser: User}>
      {
         return this.authService.deleteUser(id);
      }


}
