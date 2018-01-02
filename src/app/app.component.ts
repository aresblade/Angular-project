import { FilterPipe } from './filter.pipe';
import { UsersService } from './users.service';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app works!';
  myLogin:any = 'ares';
  myID:any;
  login = [{
    
        id: Number,
        login: String,
        password: Object,

      }];

  games = [{
    
        id: Number,
        name: String,
        descriptions: String,
        image: String
      }];
      
  

  constructor(private userService: UsersService){
    
  }


  ngOnInit() {
    this.userService.getUser()
    .subscribe(res => this.login = res);

    this.userService.getGames()
    .subscribe(res => this.games = res);

  }

  @Input()
  public getGames() {
    return this.games;
  }
  //  show() {
  //   for(let item of this.login){
  //     if (item.login == this.myLogin){
  //       this.myID = item.id;
  //     }
  //   } 
  //   console.log(this.myID);
  // }
    
    
}
