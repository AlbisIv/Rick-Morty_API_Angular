import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'   // 
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  { 
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
