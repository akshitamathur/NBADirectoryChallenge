import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TeamDetailsComponent } from './component/team-details/team-details.component';
import {ServerMockService} from "./mock/server-mock.service";
import { TeamPlayersComponent } from './component/team-players/team-players.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamListComponent},
      { path: 'players', component: TeamPlayersComponent},
      { path: 'details/:teamId', component: TeamDetailsComponent}
      
    ],{ useHash: true, relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamPlayersComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerMockService, multi: true }]
})
export class AppModule { }
