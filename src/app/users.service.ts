import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UsersService {

constructor(private http: Http) {}

public getUser(): Observable<any> {
    return this.http.get('./assets/userA.json')
                    .map((res: Response) => res.json());

}
public getMyGames(): Observable<any> {
    return this.http.get('./assets/myGamesA.json')
                    .map((res: Response) => res.json());

}
public getGames(): Observable<any> {
    return this.http.get('./assets/games.json')
                    .map((res: Response) => res.json());

}


}
