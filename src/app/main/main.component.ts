import { FilterPipe } from './../filter.pipe';
import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  games =[];
  private id;
  private sub: any;

  constructor(private gamesService: GamesService, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.gamesService.getGames()
    .subscribe(res => this.games = res);


    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
