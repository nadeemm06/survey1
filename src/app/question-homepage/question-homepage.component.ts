import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ques } from '../question';
import { Questionaire } from '../questionaire';
import { QuestionsService } from "../questions.service";
import  Questionaires  from "../questionaires.json";
import  Questionss  from "./questions.json";
import Answers from "./answers.json"
import Conv from "../conv.json"
import { Questions } from '../questions';
import New from './new.json';

@Component({
  selector: 'app-question-homepage',
  templateUrl: './question-homepage.component.html',
  styleUrls: ['./question-homepage.component.css']
})
export class QuestionHomepageComponent implements OnInit {
  

  newAns : any;
  newAns1= [] ;
  section:any;
  parameter:any;
  level:any;
  questions:any;
  response:any;


  new:{ sections:{section:string;
       parameters:{parameter:string;
       level:{ questionLevel:number;
       questions:{ questionNo:string;
            questionDescription;
            response:{option:string;points:number}[],}[],}[],}[],}[],
           }[]= New;
  currentSection=0;
  currentParameter=0;
  currentLevel=0;
  currentNew=0;


  conv: {section:string,parameter:string,questionLevel:string,questionNo:string,questionDescription,response:{option:string,points:number}[],}[]= Conv;
  currentConv :any;
   

  
  
  currentQuestion =0;
  answerSelected = false;
  totalPoints :any;
  btnDisabled = true;
  fileHide =true;
  commentHide = true;
  options:string;
  points:any;
  
  onOpt(points: number){
    if(points !== null){
     //console.log(this.totalPoints +=  points,"if points");
      this.totalPoints= points;
      this.btnDisabled = false;
      this.fileHide = false;
      this.commentHide= false;
      console.log(this.currentSection++)
     if( this.currentSection==null){

      this.currentParameter ++;
      this.currentQuestion++;
      this.currentLevel++;
     }; 
     
    }
  }
 
  nextQuestionClick(){
    this.answerSelected = true; 
    
    setTimeout(()=>{
      
      this.currentQuestion++
      this.answerSelected = false; 
     
    },1000);
    this.btnDisabled = true;
      this.fileHide = true;
      this.commentHide= true;
  
  }


 


 

  constructor(private router: Router, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    
  



    this.section=this.new["sections"];
     console.log(this.section, "sssss");

     this.parameter=this.section[0].parameters;
     console.log(this.parameter, "ppppppp");
     
     this.level = this.parameter[0].level;
     console.log(this.level, "lllll");

     
      

     this.questions = this.level[0].questions;
     console.log(this.questions, "qqqqq")

     this.response = this.questions[0].response;
     console.log(this.response, "rrrr");

    




  }



  optn(points: number){
    if(points!==null){
      console.log(points)
    }
  }
















}
