import { Injectable } from "@angular/core";
import { ActivityDictonary, ActivityModel } from "../models/ActivityModel"
import { NetService } from "./net.service";
@Injectable()
export class ActivitysService{
  public acts = new ActivityDictonary();
  constructor(private netService:NetService){
  }
  addActivity(activity:ActivityModel,typeAct:number){
    switch(+typeAct){
      case 1:
        this.acts.toDo.push(activity);
        break;
      case 2:
        this.acts.Process.push(activity);
        break;
      case 3:
        this.acts.Doed.push(activity)
        break;
    }
  }
  getActivityData(typeAct:number):ActivityModel[]{
    switch(typeAct){
      case 1:
        return this.acts.toDo
        break;
      case 2:
        return this.acts.Process
        break;
      case 3:
      default:
        return this.acts.Doed
        break;
    }

  }
  isVoidActivitys(){
    if(this.acts.Doed.length == 0 && this.acts.toDo.length == 0 && this.acts.Process.length == 0){
      return true;
    }
    return false;

  }
  getActivitiesFromDb(){

  }
}

