import { Input } from "@angular/core";
import { AppComponent } from "./../app.component";
import { GamesService } from "./../games.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilterPipe } from "./../filter.pipe";

@Component({
  selector: "app-myGames",
  templateUrl: "./myGames.component.html",
  styleUrls: ["./myGames.component.css"]
})
export class MyGamesComponent implements OnInit {
  @Input() userId: number;

  games = [];
  gamesInfo = [
    {
      userID: Number,
      myGames: [
        {
          id: Number,
          name: String,
          description: String,
          image: String
        }
      ]
    }
  ];

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  public returnGame(game) {
    this.gamesService.returnGame(game.id).subscribe(res => {
      this.gamesInfo[0].myGames = this.gamesInfo[0].myGames.filter(item => {
        return item.id !== game.id;
      });
    });
  }

  ngOnInit() {
    this.gamesService.getGamesByUserId().subscribe(res => {
      this.gamesInfo = res;
    });
  }



}
