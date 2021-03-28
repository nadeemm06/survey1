import { Injectable } from '@angular/core';
import { Welcome } from './welcome';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {


  constructor() { }

  welcomeComponents: Welcome[] = [
    {
     Account: [{"name":"Account 1"},{"name":"Account 2"}],
     
      BU: [ {"name":"BU 1"},{"name":"BU 2"}],

      Application: [ {"name":"App 1"},{"name":"App 2"}] 
    
    }
  ]


   getWelcome(){
    return this.welcomeComponents;

  }



}
