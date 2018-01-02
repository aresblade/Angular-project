import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MyGamesComponent } from 'app/myGames/myGames.component';
import { PropositionComponent } from 'app/proposition/proposition.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { GameDetailComponent } from 'app/gameDetail/gameDetail.component';


const routes: Routes = [
  { path: '',component: MainComponent , pathMatch: 'full' },
  { path: 'games/:id',component: GameDetailComponent},
  { path: 'myGames',component: MyGamesComponent },
  { path: 'proposition',component: PropositionComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
