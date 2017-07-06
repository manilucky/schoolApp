import { Component, OnInit,Input } from '@angular/core';
import { course } from "app/coursemodule/course";
import {CouselistComponent} from "app/coursemodule/couselist.component";
import {CoursesServiceService} from 'app/services/courses-service.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Component({
  selector: 'cr-course-deatillist',
  templateUrl: './course-deatillist.component.html',
  styleUrls: ['./course-deatillist.component.css']
})
export class CourseDeatillistComponent implements OnInit {
  [x: string]: any;
  courses;
  idparam;
  loaded:boolean=false;
  coursedata;

  public _detailcourse; 

  testdata: Observable<course[]>;
  constructor(private router:Router,private servedata:CoursesServiceService,private data:ActivatedRoute) {  
    
  }

condition(courseobj){
  if(courseobj==1){
    return true;
  }
  return false;
}

  ngOnInit() { 
    this.data.params.subscribe(x=>this.idparam=x['id'],y=>y,()=>"");
    console.log((this.idparam));
    this.servedata.getCoursebyId(this.idparam).subscribe((data)=>{
      this.courses =data.json();
      this.loaded=true;
    },y=>console.log(y),()=>"");
  }
  
}
