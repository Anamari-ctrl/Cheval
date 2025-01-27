import { Component, OnInit } from '@angular/core';
import { HorseService } from '../services/horse.service';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {
  horses: any[] = [];

  constructor(private horseService: HorseService) {}

  ngOnInit(): void {
    this.horseService.getAllHorses().subscribe((data) => {
      this.horses = data;
    });
  }
  deleteHorse(horseId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this horse?');
    if (confirmDelete) {
      this.horseService.deleteHorse(horseId).subscribe(() => {
        this.horses = this.horses.filter((horse) => horse.id !== horseId);
        alert('Horse deleted successfully!');
      });
    }
  }
}
