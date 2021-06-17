import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    if (!term) return value;
    return value.filter((x: any) => x.email.toLowerCase().includes(term.toLowerCase()));
  }
}
