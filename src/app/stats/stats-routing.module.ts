import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats.component';


const statsRoutes: Routes = [
{ path: '', component: StatsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(statsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/