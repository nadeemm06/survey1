import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from "../login";
import { LoginService } from "../login.service";
import { LoginStatus } from "../login-status";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  loginForm:  FormGroup;

  login: Login = new Login();
  //login = new Login()
  Error=false;
  message: string;
  loginStatus="false";

  user:LoginStatus;
  
  

  constructor(private fb: FormBuilder,private router:Router,private route: ActivatedRoute, private loginService: LoginService) {
    this.createForm();
    
   }

   createForm(){
     this.loginForm=this.fb.group({
       email:['',[Validators.required,Validators.pattern]],
       password:['',[Validators.required]]
     });
   }

  ngOnInit(): void {
    
  }


  loginUser(){
    //alert(JSON.stringify(this.loginForm.value));
  
    // var form = this.loginForm.controls;
    // console.log(form.email.value);
    
   if(this.loginForm.valid){
   // let loginValue = this.loginForm.value;
    //console.log(loginValue,"lv")
   // this.login(loginValue);
     console.log("If first level");
      if(this.login.email=="a@b.com" && this.login.password=="Test@1234"){
        console.log("If second level");
          let loginValue = this.loginForm.value;
          console.log(loginValue,"lv")
           let userEmail = this.login.email;
           this.loginStatus="true";
            sessionStorage.setItem('email', userEmail);
            sessionStorage.setItem('loginStatus',this.loginStatus);
            console.log('email',"eeeeeeeeee")
            console.log('loginStatus',"lssss")
            //let data:any=this.loginForm.value;
           // this.router.navigate(['/welcome'],{queryParams:{data:btoa(JSON.stringify(data))}});
            this.router.navigate(['/welcome']).then(()=>{
              console.log(sessionStorage.getItem('email'))
              window.location.reload();
            });
     
    } else{
      console.log("Else part");
     // alert(JSON.stringify("Inavlid credentials"))
        this.Error = true;
        this.message = "invalid user id/password"
        this.loginForm.reset();
        this.router.navigate(['/login'])
    }

   }

  }

  // loginUser(){

  //   this.loginService.login(this.login).subscribe(data =>{



  //     if(data.status == 'SUCCESS'){
  //       let userId = data.userId;
  //       let userEmail = data.email
  //       console.log(data.email)
  //       this.loginStatus="true";
  //       sessionStorage.setItem('userId', String(userId));
  //       sessionStorage.setItem('email', userEmail);
  //       sessionStorage.setItem('userName', userName);
  //       sessionStorage.setItem('loginStatus', this.loginStatus);
  //       //this.router.navigate(['welcome'])
  //       this.router.navigate(['']).then(()=>{
  //         console.log(sessionStorage.getItem('email'))
  //         window.location.reload();
  //       });
  //     }
  //     else{
  //       this.message = data.message
  //     }
  //   })
  // }





  

}
