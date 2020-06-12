import { Injectable } from '@nestjs/common';
import { characters } from '../../static/characters';

@Injectable()
export class VaubanService {
  private characters: any = characters;

  //List All categories
  listAllCatogories(): any {
    let returnItem: Array<string> = [];
    this.characters.forEach(element => {
      let obj = Object.keys(element)
        .toString()
        .toLowerCase();
      returnItem.push(obj);
    });
    return returnItem[0];
  }

  //find random character from category
  findRandomCharacter(): any {
    //calculate the random number within range of length of characters
    let random: number = Math.floor(
      Math.random() * Math.floor(this.characters.length),
    );
    return this.characters[random];
  }

  //find One character from category
  getOneCharacterByName(name: string): any {
    // find one charcater object by name
    return this.characters.find(element =>
      element.name.toLowerCase().includes(name.trim().toLowerCase()),
    );
  }

  //find by free text
  searchFreeText(text: any): Array<string> | string {
    let returnItem: Array<string> = [];
    this.characters.forEach(element => {
      let obj = Object.values(element)
        .toString()
        .toLowerCase();
      if (obj.includes(text.toLowerCase().trim())) {
        returnItem.push(element);
      }
    });
    //validate return item
    if (returnItem.length == 1) {
      return returnItem[0];
    } else if (returnItem.length > 1) {
      return returnItem;
    } else {
      return 'No characters with this category';
    }
  }

  //returns character who has given key and value pair
  searchByCategory(key: string, value: any): any {
    console.log(key, value);
    let returnItem: Array<Object> = [];
    this.characters.forEach(element => {
      let ifExist = element.hasOwnProperty(key) && element[key] == value;
      if (ifExist == true) {
        returnItem.push(element);
      }
    });

    //validate return item
    if (returnItem.length == 1) {
      return returnItem[0];
    } else if (returnItem.length > 1) {
      return returnItem;
    } else {
      return 'No characters with this category';
    }
  }
}
