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
import { NewDetailComponent } from './new-detail/new-detail.component';
import { PrimaryMenuComponent } from './primary-menu/primary-menu.component';
import { SecondaryMenuComponent } from './secondary-menu/secondary-menu.component';

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
    NewDetailComponent,
    PrimaryMenuComponent,
    SecondaryMenuComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'session',
        component: SessionComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
