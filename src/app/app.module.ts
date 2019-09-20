import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';
import { StatsModule } from './stats/stats.module';
import { TodoModule } from './todo/todo.module';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [{
  path: 'stats', component: StatsComponent
}, {
  path: 'rounds', loadChildren: () => import('./round/round.module').then(module => module.RoundModule)
}, {
  path: 'todos', component: TodoComponent
}, {
  path: '', redirectTo: 'todos', pathMatch: 'full'
}]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StatsModule,
    TodoModule,
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
