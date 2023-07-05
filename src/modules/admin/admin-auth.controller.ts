import { Controller, Get, Body, Patch,Delete, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import paginationUserInterface from "../auth/interfaces/pagination-user.interface";
import updateUserInterface from "../auth/interfaces/update-user.interface";
import {AuthService} from "../auth/auth.service";
import {updateUserDto} from "../auth/dto/update-user.dto";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import {adminUpdateUserDto} from "../auth/dto/admin-update.user";
import { adminUpdateBlockStatusUserDto, } from "../auth/dto/admin-update-block-status.user.dto";

@ApiTags('admin')
@Controller('admin')
export class adminAuthController {
  constructor(private readonly authService:AuthService) {}



      //get all users and search by name
      @ApiBearerAuth()
      @ApiQuery({ name: 'page', type: Number, required: true })
      @ApiQuery({ name: 'pageSize', type: Number, required:false})
      @ApiQuery({ name: 'username', required: false })
      @Get('/search/:user')
      @Roles(Role.L2A_ADMIN)
      async getReview(@Query('page') page: number = 1,@Query('pageSize') pageSize: number =10,@Query('username')username?: string):Promise<paginationUserInterface>
      {
            console.log("user")
          return  this.authService.getAllUsers(page,pageSize,username);
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




       // admin user update status
       @ApiBearerAuth()
       @ApiBody({type:adminUpdateUserDto})
       @Patch('user/update/status')
       @Roles(Role.L2A_ADMIN)
       async adminUpdateUserStatus(@Body() body:adminUpdateUserDto)
       {
            return this.authService.adminUpdateUserStatus(body);
       }



      // admin user update block status
       @ApiBearerAuth()
       @ApiBody({type:adminUpdateBlockStatusUserDto})
       @Patch('user/update/block/status')
       @Roles(Role.L2A_ADMIN)
       async adminUpdateUserBlockStatus(@Body() body:adminUpdateBlockStatusUserDto)
       {
            return this.authService.adminUpdateUserBlockStatus(body);
       }






      //delete user with review with likeAndDislike
      @ApiBearerAuth()
      @Delete('user/delete')
      @Roles(Role.L2A_ADMIN)
      async deleteUser(@Query('id') id:string):Promise<{message: string}>
      {
         return this.authService.deleteUser(id);
      }





      // calculate user each week and each month
        @ApiBearerAuth()
        @ApiQuery({ name: 'start', required: false })
        @ApiQuery({ name: 'end', required: false })
        @Get("/user/details/count")
        @Roles(Role.L2A_ADMIN)
        async getUserDetails(  @Query('start') start?: string ,@Query('end')end?: string,)
        {
             return this.authService.getUserDetails(start ,end);
        }

}
