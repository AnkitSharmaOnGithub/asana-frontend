import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';
import { CreateEditTaskComponent } from './tasks/create-edit-task/create-edit-task.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, TasksComponent, ViewTaskComponent, CreateEditTaskComponent, SignupComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
