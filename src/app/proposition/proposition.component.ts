import { ActivatedRoute } from "@angular/router";
import { GamesService } from "./../games.service";
import { Component, OnInit } from "@angular/core";
import { FilterPipe } from "./../filter.pipe";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-proposition",
  templateUrl: "./proposition.component.html",
  styleUrls: ["./proposition.component.css"]
})
export class PropositionComponent implements OnInit {
  games = [];

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  public rentGame(game) {
    this.games["games"] = this.games["games"].filter(item => {
      if (item.id !== game.id) {
        return game;
      }
    });
    this.gamesService.rentGame(game.id).subscribe(res => {});
  }

  ngOnInit() {
    this.gamesService.getProposition().subscribe(res => {
      this.games = res;
    });
  }
}
