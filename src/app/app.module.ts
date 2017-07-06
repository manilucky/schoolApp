import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursemoduleModule } from './coursemodule/coursemodule.module';
import { CourseDetailModuleModule } from "app/course-detail-module/course-detail-module.module";
import { NotfoundComponent } from './notfound.component';
import{ RouterModule } from '@angular/router';
import {appRoutes} from 'app/app.routing';
import { HttpModule } from '@angular/http';
import {CoursesServiceService} from 'app/services/courses-service.service';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupformComponent } from 'app/signupform/signupform.component';
import { AddformComponent } from './addform/addform.component';
import {MdDialogModule} from '@angular/material';
import { ModelpopupComponent } from './modelpopup/modelpopup.component';
//import {}
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginformComponent,
    SignupformComponent,
    AddformComponent,
    ModelpopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoursemoduleModule,
    MdDialogModule,
    //ImageUploadModule,
    CourseDetailModuleModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [CoursesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
