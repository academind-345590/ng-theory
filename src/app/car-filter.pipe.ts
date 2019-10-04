import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fildName: string){
    if (carList.length === 0 || searchStr === ''){
      return carList;
    };

    return carList.filter((car)=> car[fildName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1 );
  }

}
