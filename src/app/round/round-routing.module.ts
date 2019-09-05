import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundComponent } from './round.component';
import { MatchesListComponent } from './matches/matches-list.component';


const roundRoutes: Routes = [
  {
    path: '', component: RoundComponent,
    children: [{
      path: ':id/matches', component: MatchesListComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(roundRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoundRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/