import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatchesListComponent } from './matches/matches-list.component';
import { RoundComponent } from './round.component';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { RoundRoutingModule } from './round-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropDownsModule,
    RoundRoutingModule,
    GridModule,
  ],
  declarations: [
    MatchesListComponent,
    RoundComponent

  ]
})
export class RoundModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/