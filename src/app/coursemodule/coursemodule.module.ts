import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CouselistComponent} from './couselist.component';
import { CourseDetailModuleModule } from "app/course-detail-module/course-detail-module.module";
import { CoursesServiceService } from 'app/services/courses-service.service';

@NgModule({
  imports: [
    CommonModule,
    CourseDetailModuleModule
  ],
  exports:[
    CouselistComponent
  ],
  declarations: [CouselistComponent],

  
})
export class CoursemoduleModule { }
