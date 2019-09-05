import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [{
  path: 'stats', loadChildren: () => import('./stats/stats.module').then(module => module.StatsModule)
}, {
  path: 'rounds', loadChildren: () => import('./round/round.module').then(module => module.RoundModule)
}, {
  path: 'todos', loadChildren:() => import('./todo/todo.module').then(module => module.TodoModule)
}, {
  path: '', redirectTo: 'todos', pathMatch: 'full'
}]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
