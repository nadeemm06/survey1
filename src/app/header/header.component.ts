import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean
  statusLogin;
  showDropdown=false;

  userEmail: string;
  userName: string;

  constructor( private router:Router) { 
    this.statusLogin = sessionStorage.getItem('loginStatus');
    console.log(this.statusLogin);
    this.status = Boolean(JSON.parse(this.statusLogin));
    console.log(this.status);
   
  }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('email');
    console.log(this.userEmail,"uemail");
    //this.userName = sessionStorage.getItem('userName');
  }



  checking() {
    // session logic 
    // store login status in the sessions
    // this.status=true
    this.router.navigate(['/login', 1])
  }
  myFunction() {
    this.showDropdown=true;
    // if(this.showDropdown)
    // $(".dd").css('display', 'display');
  }
  onChange(val) {
    console.log(val,"vvv");
    if (val === "Signout") {
       console.log(val==="Signout","ssss");
      this.statusLogin = sessionStorage.getItem('loginStatus');
      console.log(sessionStorage.getItem('email'));
      console.log(this.statusLogin,"sl");
      sessionStorage.clear();
      this.router.navigate(['/login']).then(()=>{
        console.log(sessionStorage.getItem('email'),"em")
        window.location.reload();
      });
     // window.location.reload();
      this.statusLogin = sessionStorage.getItem('loginStatus');
      console.log(this.statusLogin,"after signout");
      this.status = false;
      

    }

    else{
     // this.router.navigate([''])
      console.log();

    }

  }


  refresh() {

    window.location.reload();
    return;

  }





}
