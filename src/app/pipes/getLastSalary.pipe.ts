import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLastSalary'
})
export class GetLastSalaryPipe implements PipeTransform {

  transform(value: number[], args?: any): any {
    return `${value[0]} , ${value[1]} y ${value[2]} `
  }

}
