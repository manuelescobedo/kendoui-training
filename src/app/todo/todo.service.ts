import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _tasksList = new BehaviorSubject<any[]>([])
  constructor(
    private _http: HttpClient
  ) {

  }
  getTasksList() {
    return this._tasksList.asObservable();
  }
  fetchTasksList() {
    const http = this._http.get<any[]>('/api/todos');
    http.subscribe((list) => {
      this._tasksList.next(list)
    })
    return http;
  }
  updateTask(task) {
    const newTask = { ...task, done: !task.done, createdDate: !task.done ? Date.now() : task.createdDate, finishedDate: !task.done ? null : Date.now() }
    
    const http = this._http.put('/api/todos/' + task.id, newTask);
    http.subscribe(() => {
      this._tasksList.next(
        this._tasksList.getValue().map(t => t.id === newTask.id ? newTask : t)
      )
    })
    return http;

  }
  removeTask(taskId) {
    const http = this._http.delete('/api/todos/' + taskId);
    http.subscribe(() => {
      this._tasksList.next(
        this._tasksList.getValue().filter(({ id }) => id !== taskId)
      )
    })
    return http;

  }
  addTask(taskName) {
    const newTask = {
      name:taskName, 
      createdDate: Date.now(),
      finishedDate: null,
      done: false
    }
    console.log(newTask);
    const http = this._http.post('/api/todos/', newTask);
    http.subscribe((val) => {
      this._tasksList.next(
        [...this._tasksList.getValue(), val]
      )
    })
    return http;
  }
}