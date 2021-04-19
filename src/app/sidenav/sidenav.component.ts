import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened=true;
  sections:any;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.sections = this.questionsService.getQuestionare()["sections"];
  }

  
}
