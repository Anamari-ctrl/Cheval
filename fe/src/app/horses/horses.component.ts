import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-horses',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './horses.component.html',
  styleUrl: './horses.component.css'
})
export class HorsesComponent {
  horses = [
    { id: 1, name: 'Thunder', age: 5, breed: 'Arabian', owner: 'John Doe', photoUrl: '/assets/horse.jpg' },
  ];
}
