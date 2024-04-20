import { Component, OnInit } from '@angular/core';
import { ActivitysService } from '../services/activities.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  activities:string[] = [];
  activeForm = false;
  constructor(private actService:ActivitysService,private pt:Router){

  }
  ngOnInit(): void {
      this.activities = this.actService.acts.codeActivity;

  }
  rdirect(){
    this.activeForm = this.activeForm === true ? false:true;
    this.pt.navigate(['formActivity']);
  }
  addActivity(){
  }
}
