import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { StatsRoutingModule } from './stats-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    GridModule
  ],
  declarations: [
    StatsComponent
  ]
})
export class StatsModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/