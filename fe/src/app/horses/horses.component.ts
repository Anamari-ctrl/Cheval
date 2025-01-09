import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horses',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './horses.component.html',
  styleUrl: './horses.component.css'
})
export class HorsesComponent {
  horses = [
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },
    { id: 1, name: 'Quality', age: 5, breed: 'Arabian', owner: 'Anamari Orehar', photoUrl: '/assets/horse.jpg' },

  ];
}
