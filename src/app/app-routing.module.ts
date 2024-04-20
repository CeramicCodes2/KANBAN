import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormActivityComponent } from './form-activity/form-activity.component';

const routes: Routes = [
  {path:'',component:BoardComponent,children:
  [
    {path:'formActivity',component:FormActivityComponent}
  ]},//canActivate:[loginGuard],
  {path:'login/',component:LoginComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
