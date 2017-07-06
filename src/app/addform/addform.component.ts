import { Component, OnInit } from '@angular/core';
import { course } from "app/coursemodule/course";
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import {Router,ActivatedRoute} from '@angular/router';
import{CouselistComponent} from 'app/coursemodule/couselist.component'
import { CoursesServiceService } from "app/services/courses-service.service";
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'cr-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  course: any;
  loaded: boolean;
  data: any;
  addNewCourse: FormGroup;
  jCourse:FormGroup;
  type0;
  type1;
  testcourse;
  selectedcourse:course;
  courses;
  routedata;
  courseselected;
  idparam;
  temp;
  selectedValue;
  addCourseObj:any=[{
                  Course_Name: "",
                  Module_ID:"",
                  Description:"",
                  Topic: "",
                  SubTopic: [],
                  Picture:"",
                  Seats:"",
                  Cost:"",
                  StudentId:[],
                  Prerequisites: [],
                }];
  testdata: Observable<course[]>;

  constructor(private router:Router,private servedata:CoursesServiceService,private routeddata:ActivatedRoute) {  
    this.addNewCourse = new FormGroup({
      'CourseName': new FormControl('', Validators.required),
      'ModuleID': new FormControl('', Validators.required),
      'Description': new FormControl('', Validators.required),
      'Topic': new FormControl('', Validators.required),
      'SubTopic': new FormControl('', Validators.required),
      'Picture': new FormControl('', Validators.required),
      'Seats': new FormControl('', Validators.required),
      'Cost': new FormControl('', Validators.required),
      'Prerequisites': new FormControl('', Validators.required)
    });

    this.jCourse = new FormGroup({
      'joinD':new FormControl(this.addCourseObj[0].Course_Name,Validators.required)
    })
  };

newcourse(){  
     this.type0=!this.type0;
     this.type1 = false;
  }; 
joincourse(){
    this.type1 = !this.type1;
    this.type0 = false;
  }
  
handleSubmit(){
  this.addCourseObj = {
                  Course_Name: this.addNewCourse.get('CourseName').value,
                  Module_ID:this.addNewCourse.get('ModuleID').value,
                  Description:this.addNewCourse.get('Description').value,
                  Topic: this.addNewCourse.get('Topic').value,
                  SubTopic: [this.addNewCourse.get('SubTopic').value],
                  Picture:this.addNewCourse.get('Picture').value,
                  Seats:this.addNewCourse.get('Seats').value,
                  Cost:this.addNewCourse.get('Cost').value,
                  StudentId:this.addNewCourse.get('CourseName').value,
                  Prerequisites: this.addNewCourse.get('Prerequisites').value,
   }

    this.servedata.courseInsert(this.addCourseObj).subscribe((data)=>{
          this.testcourse =data;
          console.log(this.testcourse);
          if(this.testcourse.length>0){
            this.router.navigate(['couselist',this.idparam]);
          }  
    })
 
  }

jointoSubmit(){
  let coursechanged = this.jCourse.get('joinD').value;
  console.log(coursechanged);
  coursechanged.StudentId.push(this.idparam);
  console.log(coursechanged);
      this.servedata.courseUpdate(coursechanged).subscribe((data)=>{
          this.testcourse =data;
          console.log(this.testcourse);
          this.router.navigate(['couselist',this.idparam]);
    }); 
  }  

selectest(x){
   if(x.Module_ID ==1){
     return true;
   }
    else{
     return false;
   }

  }

  ngOnInit() {
    this.routeddata.params.subscribe(x=>this.idparam=x['id'],y=>y,()=>"");
    this.servedata.getcourses().subscribe((data)=>{
      this.addCourseObj.pop();
        data.json().forEach(element => {
          if(element.Module_ID==1 && !element.StudentId.includes(this.idparam)){ 
            this.addCourseObj.push(element);
            console.log(this.addCourseObj);
        }
      })
    });

  }
}
