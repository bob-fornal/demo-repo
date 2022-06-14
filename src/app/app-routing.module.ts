
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TheWayOfAngularComponent } from '@pages/the-way-of-angular/the-way-of-angular.component';
import { NotTheWayComponent } from '@pages/not-the-way/not-the-way.component';

const routes: Routes = [
  { path: 'the-way', component: TheWayOfAngularComponent },
  { path: '', redirectTo: '/the-way', pathMatch: 'full' },

  { path: '**', component: NotTheWayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
