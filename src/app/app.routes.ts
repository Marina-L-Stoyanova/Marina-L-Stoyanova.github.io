import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ImagesComponent } from './images/images.component';

export const routes: Routes = [
  { path: '', redirectTo: 'images', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'images', component: ImagesComponent, data: { text: 'Images' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
