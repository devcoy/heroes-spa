import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';


const APP_ROUTES: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'heroes', component:  HeroesComponent },
  { path: 'heroe/:id', component:  HeroeComponent },
  { path: 'buscar/:searchString', component:  SearcherComponent },
  { path: 'about', component:  AboutComponent },
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);