import { Routes } from '@angular/router';
import { FirstComposantComponent } from './first-composant/first-composant.component';
import { SecondComposantComponent } from './second-composant/second-composant.component';

export const routes: Routes = [
  { path: 'first-composant', component: FirstComposantComponent },
  { path: 'second-composant', component: SecondComposantComponent },
  { path: '', redirectTo: 'first-composant', pathMatch: 'full' },
  { path: '**', redirectTo: 'first-composant' },
];
