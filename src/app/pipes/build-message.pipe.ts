import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buildMessage'
})
export class BuildMessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}