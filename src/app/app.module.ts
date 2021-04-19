import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { QuestionHomepageComponent } from './question-homepage/question-homepage.component';
import { QuestionsService } from './questions.service';
import { LoginService } from './login.service';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AuthGuard } from "./authGuards/auth.guard";
import { PreventLoggedInAccessGuard } from "./authGuards/prevent-logged-in-access.guard";
import { CookieModule } from 'ngx-cookie';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuidelinesComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
    QuestionHomepageComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    NgxPaginationModule,
    BackButtonDisableModule.forRoot( {preserveScrollPosition: true} )
  ],
  providers: [LoginService, QuestionsService,AuthGuard, PreventLoggedInAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
