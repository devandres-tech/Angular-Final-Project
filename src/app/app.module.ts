import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TaskListComponent } from "./task-list/task-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskDetailComponent, TaskFormComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
