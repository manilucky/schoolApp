import { Injectable } from '@angular/core';
import { course } from "app/coursemodule/course";
import {  Http,Response,RequestOptions,Headers } from '@angular/http'
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class CoursesServiceService {
  [x: string]: any;
  courses;
  //Observable:void;
  //Response:void;


  constructor(private http:Http) { }

/* ****** get ******* */
public getcourses(){
  return this.http.get("/Course");
}

public getCoursebyId(id){
  return this.http.get("/Course/"+id)
}

/* ****** add ******* */
public addCourse(course:course){
  this.courses.push(course);
};

courseInsert(courseobj){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("/Course",courseobj,options);
}
courseUpdate(courseobj){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put("/Course/"+courseobj._id,courseobj,options);
}
studentSignup(student){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("/signupdata",student,options);
}

studentLogin(student){
  
  return this.http.get("/signupdata/"+student);
}

}
