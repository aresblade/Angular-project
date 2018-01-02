import { FilterPipe } from './../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-gameDetail',
  templateUrl: './gameDetail.component.html',
  styleUrls: ['./gameDetail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private userService: UsersService, private route: ActivatedRoute){
  }

  public gameID;
  games = [];
  specificGame = [];

  ngOnInit() {
    this.userService.getGames()
    .subscribe(res => this.games = res);

    let id = this.route.snapshot.params['id'];
    this.gameID = id;

   
  }

  ifSelected(item){
    if (item == this.gameID) return true;
    else return false
  }


}
