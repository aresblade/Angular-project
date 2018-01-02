import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: any, term: any): any {
    if (term === undefined) return games;
    return games.filter(function(movie){
      return movie.categoryIds.toString().toLowerCase().includes(term.toLowerCase());
    });
  }

}
