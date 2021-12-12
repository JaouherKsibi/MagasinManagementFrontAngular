import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listeProduit'
})
export class ListeProduitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
