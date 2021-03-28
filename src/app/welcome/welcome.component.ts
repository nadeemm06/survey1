import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Welcome } from "../welcome";
import { WelcomeService } from "../welcome.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeForm: FormGroup;

  welcome: Welcome = new Welcome();
  welcomeStatus: false;
  message: string;

  welcomeComponents: Welcome[] = [];
  account:any;
  bu:any;
  application;


  constructor(private fb: FormBuilder,private router:Router,private route:ActivatedRoute,private welcomeService: WelcomeService) { 
    this.wForm();
   }

  wForm(){
    this.welcomeForm=this.fb.group({
      Account:['',[Validators.required]],
      BU:['',[Validators.required]],
      Application:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.welcomeComponents = this.welcomeService.getWelcome();
   // console.log(this.welcomeComponents[0].Account);
    this.account = this.welcomeComponents[0].Account;
    this.bu = this.welcomeComponents[0].BU;
    this.application = this.welcomeComponents[0].Application;
  }

  welcomeUser(){
    //alert(JSON.stringify(this.welcomeForm.value))
    if(this.welcomeForm.valid){
      this.router.navigate(['guidelines']);
    }
    else{
      this.router.navigate(['/'])
    }
  
  }


}
