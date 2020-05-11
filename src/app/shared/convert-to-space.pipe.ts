import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convetToSpace',
})
export class ConvertToSpacePipe implements PipeTransform {
  transform(value: string, charact: string): string {
    return value.replace(charact, ' ');
  }
}
