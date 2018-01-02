import { AppComponent } from './../app.component';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from './../filter.pipe';

@Component({
  selector: 'app-myGames',
  templateUrl: './myGames.component.html',
  styleUrls: ['./myGames.component.css']
})
export class MyGamesComponent implements OnInit {
  games = [];
  gamesInfo = [{
    
        userID: Number,
        myGames: [{
          id: Number,
          name: String,
          description: String,
          image: String,
          count: Number
        }]

      }];


  
      constructor(private userService: UsersService, private route: ActivatedRoute){
      }

  ngOnInit() {
    this.userService.getMyGames()
    .subscribe(res => this.gamesInfo = res);
  }

  

}
