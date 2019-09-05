import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';


const todoRoutes: Routes = [
{ path: '', component: TodoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(todoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/