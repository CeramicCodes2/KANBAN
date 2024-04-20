import { Component, Input } from '@angular/core';
import { ActivityModel } from '../models/ActivityModel';

@Component({
  selector: 'activities-component',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  @Input() dataActivity:ActivityModel;
}
