import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputNumberModule} from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutViewComponent } from './base-card/workout-view/workout-view.component';
import { EditViewComponent } from './base-card/edit-view/edit-view.component';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { BaseCardComponent } from './base-card/base-card.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddViewComponent } from './base-card/add-view/add-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutViewComponent,
    EditViewComponent,
    BaseCardComponent,
    AddViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    InputNumberModule,
    FormsModule,
    CheckboxModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
