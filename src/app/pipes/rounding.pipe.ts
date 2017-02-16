import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounding'
})
export class RoundingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 100) {
      return Math.round(value / 10) * 10;
  } else if (value > 1000) {
    return Math.round(value / 100) * 100;
  }else if (Math.floor(value) != value){
   return value.toFixed(1);
  }  else {
    return value;
  }

}

}
