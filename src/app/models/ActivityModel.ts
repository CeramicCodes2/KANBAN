export class AcitivtyColor{
  constructor(public color:string = '#1d3557',public backgroundColor:string = '#a8dadc'){

  }
}
export class ActivityModel{
  public uuid:string;
  setUUID(id:string){
    this.uuid = id;
  }
  geUUID(){
    return this.uuid;
  }

  constructor(public name:string,public description:string,public limit:Date,public colorActivity:AcitivtyColor){

  }
}
export class ActivityDictonary{
  constructor(public toDo:ActivityModel[] = [],public Process:ActivityModel[] = [],public Doed:ActivityModel[] = [],
    public codeActivity = ['toDo','Process',"Doed"]
  ){}


}
