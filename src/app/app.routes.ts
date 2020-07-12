import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const APP_ROUTES: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'heroes', component:  HeroesComponent },
  { path: 'about', component:  AboutComponent },
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);