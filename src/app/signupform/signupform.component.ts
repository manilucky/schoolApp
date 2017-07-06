import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {Router} from '@angular/router';
import { LoginformComponent } from 'app/loginform/loginform.component';
import {CoursesServiceService} from 'app/services/courses-service.service';

@Component({
  selector: 'cr-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  router: any;
  Genders:any=["Male","Female"];
  dataobj:any={
                First_Name: "",
                Last_Name: "",
                Current_Email_ID: "",
                Create_Username: "",
                Create_Password :"",
                City:"",
                State:"",
                ZipCode: ""
                };
  
  signupForm:FormGroup;
  

  constructor(private servisedata:CoursesServiceService) { 
        this.router = Router;
    this.signupForm= new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      Username: new FormControl('mani125$', [Validators.required, Validators.pattern('[a-z0-9_-]{3,15}$')]),
      Password: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9_-]{3,15}$')]),
      address: new FormGroup({
        City:new FormControl('', Validators.required),
        State:new FormControl('', Validators.required),
        ZipCode:new FormControl('', Validators.required)
      }),
      Gender:new FormControl('Female')
    })

};
 
 //************ signup to loginform navigation***********

 navigatetosignup(signupobj){
   
   this.dataobj = {
                First_Name: signupobj.get('FirstName').value,
                Last_Name: signupobj.get('LastName').value,
                Current_Email_ID: signupobj.get('email').value,
                Create_Username: signupobj.get('Username').value,
                Create_Password :signupobj.get('Password').value,
                City:signupobj.get('address').get('City').value,
                State:signupobj.get('address').get('State').value,
                ZipCode: signupobj.get('address').get('ZipCode').values

   };
   this.servisedata.studentSignup(this.dataobj).subscribe((data)=>{
      
  }); 
        if(this.signupForm.valid){
              this.servisedata.studentSignup(this.signupForm.controls['Username'].value).subscribe((data)=>{
                this.dataobj = data.json();
              this.router.navigate(['loginform']);
          }); 
            }
        }

  ngOnInit() {
    
  }

}
