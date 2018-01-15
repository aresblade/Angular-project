import { Injectable, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GamesService implements OnInit {

  private domain = 'http://localhost:3000';
  private currentUser = {
    id: 1,
    login: 'ares',
    password: 'ares',
    games: [1, 2]
  };

  constructor(
    private http: Http,
    private userService: UsersService
  ) {}

  // private getCurrentUser() {
  //   this.currentUser = this.userService.getCurrentUser();
  // }

  public getProposition(): Observable<any> {
    return this.http
      .get(`${this.domain}/users/${this.currentUser.id}/proposition`)
      .catch((error:any) => Observable.throw(error.json().error || 'Internal Server Error'));
  }

  public getGames(): Observable<any> {
    return this.http
      .get(`${this.domain}/games`)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error:any) => {
        return Observable.throw(error.json().error || 'Server error')
      });
  }

  public getGamesByUserId(): Observable<any> {
    return this.http
      .get(`${this.domain}/users/${this.currentUser.id}/games`)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error:any) => {
        return Observable.throw(error.json().error || 'Server error')
      });
  }

  public rentGame(gameId:number): Observable<any> {
    return this.http
      .post(`${this.domain}/games/${gameId}/rent?userId=${this.currentUser.id}`, {})
      .catch((error:any) => Observable.throw(error.json().error || 'Internal Server Error'));
  }

  public returnGame(gameId:number): Observable<any> {
    return this.http
      .post(`${this.domain}/games/${gameId}/return?userId=${this.currentUser.id}`, {})
      .catch((error:any) => Observable.throw(error.json().error || 'Internal Server Error'));
  }

  ngOnInit() {}
}
