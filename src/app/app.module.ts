import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { NetService } from './services/net.service';
import { LoginServiceService } from './services/login-service.service';
import { ActivitiesComponent } from './activities/activities.component';
import { PanelSecctionComponent } from './panel-secction/panel-secction.component';
import { ActivitysService } from './services/activities.service';
import { FormActivityComponent } from './form-activity/form-activity.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    ErrorComponent,
    ActivitiesComponent,
    PanelSecctionComponent,
    FormActivityComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NetService,LoginServiceService,ActivitysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
