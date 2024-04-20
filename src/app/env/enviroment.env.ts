
interface apiParam{
  argument:string,
  value:any
}
interface apiAuthParam{
  user:string,
  password:string
}
interface apiAuthResponse{
  content:string,
  secret:string
}
export class APIAuthResponse implements apiAuthResponse{
  constructor(public content:string,public secret:string){

  }
}
export class APIAuthObjectParametrer implements apiAuthParam{
  constructor(public user:string,public password:string ){

  }
}
export class APIObjectParametrer implements apiParam{
  constructor(public argument:string,public value:any){

  }

}

interface apiEndPoint{
  path:string,
  params?:APIObjectParametrer[] | APIAuthObjectParametrer[]
}

export class APIendPoint implements apiEndPoint{
  public afParams:APIObjectParametrer[] | APIAuthObjectParametrer[] = []
  constructor(public path:string,public params?:APIObjectParametrer[]|APIAuthObjectParametrer[]){
  }
  getPath(){
    return this.path;
  }
  setParams(param:any){
    this.afParams.push(param);
  }
  getParams():string[]|any[]|string|undefined{
    if(this.params != null){
      return this.params;
    }
    return this.afParams.map(mp=>JSON.stringify(mp)).pop();
  }
}

export const endpoints = {
    auth:new APIendPoint('http://127.0.0.1:8080/auth'),
    activities:new APIendPoint('http://127.0.0.1:8080/activities')
}
export class APIResponse{
  constructor(public content:string){

  }
}


