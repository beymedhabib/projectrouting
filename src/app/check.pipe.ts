import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: any [], check: any , ): any {

    return check ? value.filter(s => s.check === check) : value;

  }

}
