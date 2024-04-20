import { Component, Input, OnInit } from '@angular/core';
import { ActivitysService } from '../services/activities.service';
import { ActivityModel } from '../models/ActivityModel';

@Component({
  selector: 'app-panel-secction',
  templateUrl: './panel-secction.component.html',
  styleUrl: './panel-secction.component.css'
})
export class PanelSecctionComponent implements OnInit {
  @Input() name:string = '';
  @Input() code:number;
  voidActivites = true;
  activitys:ActivityModel[];
  constructor(private acts:ActivitysService){

  }
  ngOnInit(): void {
    this.voidActivites = this.acts.isVoidActivitys();
    this.activitys = this.acts.getActivityData(this.code);
    console.log(this.acts.getActivityData(this.code));
    //this.acts.acts.codeActivity[this.code];

  }

}
