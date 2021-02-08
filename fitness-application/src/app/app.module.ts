import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { EditCardComponent } from './workout-card/edit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutCardComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
