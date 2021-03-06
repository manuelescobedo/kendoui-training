import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputsModule
  ],
  declarations: [
    TodoComponent
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/