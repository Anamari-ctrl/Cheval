import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


import { HorsesComponent } from './horses/horses.component'; 
import { FeedingScheduleComponent } from './feeding-schedule/feeding-schedule.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
  { path: '', redirectTo: '/horses', pathMatch: 'full' }, 
  { path: 'horses', component: HorsesComponent },
  { path: 'feeding-schedule/:horseId', component: FeedingScheduleComponent }
];


@NgModule({
  declarations: [],

  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    FeedingScheduleComponent,
    AppComponent
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule {}
