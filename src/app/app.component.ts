import { Component } from '@angular/core';

import { CoursemoduleModule } from './coursemodule/coursemodule.module';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'cr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Learning Point';
}
