import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivitysService } from '../services/activities.service';
import { AcitivtyColor, ActivityModel } from '../models/ActivityModel';

@Component({
  selector: 'app-form-activity',
  templateUrl: './form-activity.component.html',
  styleUrl: './form-activity.component.css'
})
export class FormActivityComponent {
  error = false;
  constructor(private actServ:ActivitysService){

  }
  regisActivity(f:NgForm){
    if(f.value.clasif == 0){
      this.error = true;
      return;
    }
    const color = (f.value.text_color != '' && f.value.back_color != '')? new AcitivtyColor(f.value.text_color,f.value.back_color):new AcitivtyColor();
      //     new AcitivtyColor(f.value.text_color,f.value.back_color);
    this.error = false;


    this.actServ.addActivity(new ActivityModel(f.value.nombre,f.value.descripcion,f.value.date,color),f.value.clasif);


  }
}
