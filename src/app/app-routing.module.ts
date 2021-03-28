import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { LoginComponent } from './login/login.component';
import { QuestionHomepageComponent } from './question-homepage/question-homepage.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'guidelines',component:GuidelinesComponent},
  {path:'questions',component:QuestionHomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
