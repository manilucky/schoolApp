import{ Routes } from '@angular/router';
import{ CourseDeatillistComponent } from 'app/course-detail-module/course-deatillist.component';
import { NotfoundComponent } from 'app/notfound.component';
import { CouselistComponent} from 'app/coursemodule/couselist.component';
import { LoginformComponent } from 'app/loginform/loginform.component';
import { SignupformComponent } from "app/signupform/signupform.component";
import { AddformComponent } from "app/addform/addform.component";


export const appRoutes: Routes = [
{path:'', component:LoginformComponent},
{path:'couselist/:user',component:CouselistComponent},
{path:'coursedetaillist/:id',component:CourseDeatillistComponent},
{path:'signupform', component:SignupformComponent},
{path:'addform/:id', component:AddformComponent},
{path:'**',component:NotfoundComponent}
];