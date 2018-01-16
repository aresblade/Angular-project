import { FilterPipe } from "./../filter.pipe";
import { Component, OnInit } from "@angular/core";
import { GamesService } from "app/games.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-gameDetail",
  templateUrl: "./gameDetail.component.html",
  styleUrls: ["./gameDetail.component.css"]
})
export class GameDetailComponent implements OnInit {
  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  public gameID;
  games = [];
  specificGame = [];

  ngOnInit() {
    this.gamesService.getGames().subscribe(res => (this.games = res));

    let id = this.route.snapshot.params["id"];
    this.gameID = id;
  }
}
