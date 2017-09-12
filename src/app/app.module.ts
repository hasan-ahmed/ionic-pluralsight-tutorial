import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import {MyTeamsPage} from '../pages/pages'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TournamentsPage} from "../pages/tournaments/tournaments";
import {GamePage} from "../pages/game/game";
import {TeamDetailPage} from "../pages/team-detail/team-detail";
import {TeamsPage} from "../pages/teams/teams";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    ListPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    ListPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
