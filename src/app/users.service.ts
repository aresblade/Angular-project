import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
  private domain = 'http://localhost:3000';

  private currentUser = {
    id: 1,
    login: 'ares',
    password: 'ares',
    games: [1, 2]
  };

  constructor(private http: Http) {}

  public getCurrentUser() {
    return this.currentUser;
  }
}
