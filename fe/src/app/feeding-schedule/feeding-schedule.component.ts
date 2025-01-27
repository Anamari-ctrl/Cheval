import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedingScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-feeding-schedule',
  templateUrl: './feeding-schedule.component.html',
  styleUrls: ['./feeding-schedule.component.css']
})
export class FeedingScheduleComponent implements OnInit {
  feedingSchedules: any[] = [];
  horseId!: number;

  constructor(
    private route: ActivatedRoute,
    private feedingScheduleService: FeedingScheduleService
  ) {}

  ngOnInit(): void {
    this.horseId = +this.route.snapshot.paramMap.get('id')!;
    this.feedingScheduleService.getFeedingSchedules(this.horseId).subscribe((data) => {
      this.feedingSchedules = data;
    });
  }
}
