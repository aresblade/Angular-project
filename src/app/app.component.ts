import { FilterPipe } from './filter.pipe';
import { UsersService } from './users.service';
import { GamesService } from './games.service';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myLogin:String = 'ares';
  public login:Object;
  public games = [{
    id: Number,
    name: String,
    descriptions: String,
    image: String
  }];

  constructor(
    private userService: UsersService,
    private gamesService: GamesService
  ) {
    this.login = this.userService.getCurrentUser();
  }

  ngOnInit() {
    this.gamesService
      .getGames()
      .subscribe(res => this.games = res);
  }
}
