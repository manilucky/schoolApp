import { Component, OnInit,Input } from '@angular/core';
import { course } from "app/coursemodule/course";
import { CourseDeatillistComponent } from 'app/course-detail-module/course-deatillist.component';
import {CoursesServiceService} from 'app/services/courses-service.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'cr-couselist',
  templateUrl: './couselist.component.html',
  styleUrls: ['./couselist.component.css'],
  //Providers: [CoursesServiceService] 
})
export class CouselistComponent implements OnInit {
  [x: string]: any;
  selectedcourse: course;
  detailsactive:boolean;
  detail:course;
  courses;
  idparam;
  

  testdata: Observable<course[]>;
  constructor(private router:Router,private servedata:CoursesServiceService,private routedata:ActivatedRoute) {  
    
  }

navigatetoadd(){
  this.router.navigate(['addform',this.idparam]);
}

 navigatetodetails(courseobj){
   this.router.navigate(['coursedetaillist',courseobj.Course_Name]); 
  }

condition(courseobj,check){
  switch(check){
    case 1: return (courseobj.Module_ID==1 && courseobj.StudentId.indexOf(this.idparam)>0);
    case 2: return (courseobj.Module_ID==1 && courseobj.StudentId.indexOf(this.idparam)<0);
  } 
}


  ngOnInit() {
     this.routedata.params.subscribe(x=>this.idparam=x['user'],y=>y,()=>"");
     this.servedata.getcourses().subscribe((data)=>{
      this.courses =data.json();
      console.log(this.courses);
    });
   
  }

}
