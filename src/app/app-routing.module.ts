import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { StoredComponent } from './stored/stored.component';
import { PersonalComponent } from './personal/personal.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { NewDetailComponent } from './new-detail/new-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/session', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stored', component: StoredComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'search', component: SearchComponent },
  { path: 'new-detail/:id', component: NewDetailComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
