import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HorsesComponent } from './horses/horses.component'; // Ensure this path is correct
import { HorseDetailsComponent } from './horse-details/horse-details.component';
import { EditHorseComponent } from './edit-horse/edit-horse.component';
import { FeedingScheduleComponent } from './feeding-schedule/feeding-schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { AddHorseComponent } from './add-horse/add-horse.component';
import { ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [
  { path: '', redirectTo: '/horses', pathMatch: 'full' }, // Redirect to horses list by default
  { path: 'horses', component: HorsesComponent }, // List of all horses
  { path: 'horse/:id', component: HorseDetailsComponent }, // Details of a single horse
  { path: 'add-horse', component: AddHorseComponent }, // Add a new horse
  { path: 'edit-horse/:id', component: EditHorseComponent }, // Edit an existing horse
  { path: 'feeding-schedule/:id', component: FeedingScheduleComponent }, // Feeding schedule for a specific horse
  { path: 'schedule-list', component: ScheduleListComponent }, // Calendar or list view of feeding schedules
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ], 
  exports: [RouterModule] 
})
export class AppRoutingModule {}
