import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authGuards/auth.guard';
import { PreventLoggedInAccessGuard } from './authGuards/prevent-logged-in-access.guard';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { LoginComponent } from './login/login.component';
import { QuestionHomepageComponent } from './question-homepage/question-homepage.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'thankyou',component:ThankyouComponent, canActivate:[AuthGuard]},
  {path:'questions/section/:currentSection/parameter/:parameterNo/level/:levelNo/question/:questionNo',
  component:QuestionHomepageComponent, },
  {path:'questions',component:QuestionHomepageComponent, },
  {path:'guidelines',component:GuidelinesComponent, canActivate:[AuthGuard]},
  {path:'welcome',component:WelcomeComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent, canActivate:[PreventLoggedInAccessGuard]},
  {path:'',redirectTo: '/login', pathMatch:'full'},
 // {path:'**',redirectTo: '/login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
