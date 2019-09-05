import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './todo.component.html',
  styles: [``]
})
export class TodoComponent implements OnInit {
  private todos$;

  private task;

  constructor(
    private _todoService: TodoService
  ) {
    this.todos$ = this._todoService.getTasksList();
  }
  updateTask(task) {
    this._todoService.updateTask(task);
  }
  ngOnInit() {
    this._todoService.fetchTasksList()
      
  }

  removeTask(taskId) {
    this._todoService.removeTask(taskId);
  }

  onSubmit( ){
    this._todoService.addTask(this.task);
    this.task=''
  }
}