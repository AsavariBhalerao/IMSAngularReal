import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './shared/Guards/auth-guard.guard';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login", canActivate:[AuthGuardGuard],
    component:LoginComponent
  },
  {
    path:"nav",canActivate:[AuthGuardGuard],
    component:NavComponent
  },
  {
   
    path:"users",canActivate:[AuthGuardGuard],
    loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule)
   
  },
{
  path:"institute",canActivate:[AuthGuardGuard],
  loadChildren:()=>import('./institute/institute.module').then((m)=>m.InstituteModule)
},
{
  path:"courses",canActivate:[AuthGuardGuard],
  loadChildren:()=>import('./courses/courses.module').then((m)=>m.CoursesModule)
 
},
{
  path:"enrollment",canActivate:[AuthGuardGuard],
  loadChildren:()=>import('./enrollment/enrollment.module').then((m)=>m.EnrollmentModule)

},
{
  path:"**",
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
