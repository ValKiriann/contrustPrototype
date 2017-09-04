import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { StoredComponent } from './stored/stored.component';
import { PersonalComponent } from './personal/personal.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailEasyReadComponent } from './news-detail-easy-read/news-detail-easy-read.component';

import { PrimaryMenuComponent } from './primary-menu/primary-menu.component';
import { SecondaryMenuComponent } from './secondary-menu/secondary-menu.component';
import { SecondaryMenuPersonalComponent } from './secondary-menu-personal/secondary-menu-personal.component';
import { SecondaryMenuStoredComponent } from './secondary-menu-stored/secondary-menu-stored.component';
import { SecondaryMenuSettingsComponent } from './secondary-menu-settings/secondary-menu-settings.component';
import { SecondaryMenuSearchComponent } from './secondary-menu-search/secondary-menu-search.component';
import { SecondayMenuNdetailComponent } from './seconday-menu-ndetail/seconday-menu-ndetail.component';

import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    HomeComponent,
    MainComponent,
    StoredComponent,
    PersonalComponent,
    SearchComponent,
    SettingsComponent,
    NewsDetailComponent,
    NewsDetailEasyReadComponent,
    PrimaryMenuComponent,
    SecondaryMenuComponent,
    SecondaryMenuPersonalComponent,
    SecondaryMenuStoredComponent,
    SecondaryMenuSettingsComponent,
    SecondaryMenuSearchComponent,
    SecondayMenuNdetailComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
