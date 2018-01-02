import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyGamesComponent } from './myGames/myGames.component';
import { PropositionComponent } from './proposition/proposition.component';
import { AppRoutes } from 'app/app.routing';
import { MainComponent } from './main/main.component';
import { GameDetailComponent } from './gameDetail/gameDetail.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyGamesComponent,
    PropositionComponent,
    MainComponent,
    GameDetailComponent,
    FilterPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
