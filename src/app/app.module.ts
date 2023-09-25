import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from '../Components/tasks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  declarations: [AppComponent, TasksComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
