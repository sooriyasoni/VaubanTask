import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { VaubanService } from './vauban.service';

@Controller('vauban')
export class VaubanController {
  constructor(private vaubanService: VaubanService) {}
  //list all categories
  @Get()
  listAllCatogories(): any {
    return this.vaubanService.listAllCatogories();
  }

  //find random character
  @Get('/character/random')
  findRandomCharacter(): any {
    return this.vaubanService.findRandomCharacter();
  }
  //find one character
  @Get('/character/:name')
  getOneCharacterByName(@Param('name') name: string): any {
    return this.vaubanService.getOneCharacterByName(name);
  }
  //find characters by free text
  @Get('/freeText')
  searchFreeText(@Query('search') text: any): Array<string> | string {
    return this.vaubanService.searchFreeText(text);
  }

  //find by key and value pair
  @Get('/category/:key/:value')
  searchByCategory(@Param('key') key: string, @Param('value') value: any): any {
    return this.vaubanService.searchByCategory(key, value);
  }
}
