import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDeatillistComponent } from './course-deatillist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CourseDeatillistComponent
  ],
  declarations: [CourseDeatillistComponent]
})
export class CourseDetailModuleModule { }
