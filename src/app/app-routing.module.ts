import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { StoredComponent } from './stored/stored.component';
import { PersonalComponent } from './personal/personal.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailEasyReadComponent } from './news-detail-easy-read/news-detail-easy-read.component';

const routes: Routes = [
  { path: '.', redirectTo: '/session', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stored', component: StoredComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'search', component: SearchComponent },
  { path: 'news-detail/:id', component: NewsDetailComponent },
  { path: 'news-detail-easy-read/:id', component: NewsDetailEasyReadComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
