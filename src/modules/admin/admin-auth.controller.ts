import { Controller, Get, Body, Patch,Delete, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import paginationUserInterface from "../auth/interfaces/pagination-user.interface";
import updateUserInterface from "../auth/interfaces/update-user.interface";
import { User } from "../users/schemas/user.schema";
import {AuthService} from "../auth/auth.service";
import {updateUserDto} from "../auth/dto/update-user.dto";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";


@ApiTags('admin')
@Controller('admin')
export class adminAuthController {
  constructor(private readonly authService:AuthService) {}



      //get all users and search by name
      @ApiBearerAuth()
      @ApiQuery({ name: 'username', required: false })
      @Get('/search/:user')
      @Roles(Role.L2A_ADMIN)
      async getReview(@Query('page') page: number = 1,@Query('username')username?: string):Promise<paginationUserInterface>
      {

          console.log("user ")
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



      //delete user with review with likeAndDislike
      @ApiBearerAuth()
      @Delete('user/delete')
      @Roles(Role.L2A_ADMIN)
      async deleteUser(@Query('id') id:string):Promise<{message: string}>
      {
         return this.authService.deleteUser(id);
      }


}
