// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { MailchipService } from './mailchip.service';
// import { CreateMailchipDto } from './dto/create-mailchip.dto';
// import { UpdateMailchipDto } from './dto/update-mailchip.dto';
//
// @Controller('mailchip')
// export class MailchipController {
//   constructor(private readonly mailchipService: MailchipService) {}
//
//   @Post()
//   create(@Body() createMailchipDto: CreateMailchipDto) {
//     return this.mailchipService.create(createMailchipDto);
//   }
//
//   @Get()
//   findAll() {
//     return this.mailchipService.findAll();
//   }
//
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.mailchipService.findOne(+id);
//   }
//
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateMailchipDto: UpdateMailchipDto) {
//     return this.mailchipService.update(+id, updateMailchipDto);
//   }
//
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.mailchipService.remove(+id);
//   }
// }
