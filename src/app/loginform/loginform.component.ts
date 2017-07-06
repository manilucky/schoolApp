import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {Router} from '@angular/router';
import {CoursesServiceService} from 'app/services/courses-service.service';
import {MdDialog, MdDialogRef} from '@angular/material';



@Component({
  selector: 'cr-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
 
  UserForm:FormGroup;
  dataobj;
  errormessage;
  message:boolean;
  getparam;

  constructor(private router:Router,private servisedata:CoursesServiceService,private dialog:MdDialog) { 
  
    this.UserForm = new FormGroup({
      'Username': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)
    });

  }
//navigate(){
  //console.log("error");
  // this.router.navigate(['signupform']); 
 // }
  ngOnInit() {
  }

  // *********** login validation and rendering into home page ********************
    handleSubmit(){
       if(this.UserForm.valid){
         this.servisedata.studentLogin(this.UserForm.controls['Username'].value).subscribe((data)=>{
          this.dataobj = data.json();
          if(this.dataobj.length>0){
              this.getparam = this.dataobj;
              this.router.navigate(['couselist',this.getparam[0]._id]);
          }
          else{
            this.message=!this.message;
            this.errormessage="Please provide valid login details";
          }
    }); 
       }
    }
}
