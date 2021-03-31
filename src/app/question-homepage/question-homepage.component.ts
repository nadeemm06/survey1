import { Component, Input, OnInit, Output, EventEmitter,  OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
//import paginate from 'jw-paginate';

import { QuestionsService } from "../questions.service";
import Conv from "../conv.json"
import New from './new.json';
import value from '../conv.json';

@Component({
  selector: 'app-question-homepage',
  templateUrl: './question-homepage.component.html',
  styleUrls: ['./question-homepage.component.css']
})
export class QuestionHomepageComponent implements OnInit {
  totalLength:any;
  totalLeng:any;
  page:number=1;
  para:number=1;
  questionObject:any;
  levelObject:any;
  paraObject:any;
  responseObject:any;



  newAns : any;
  newAns1= [] ;
  questionare=[];
  sections:any;
  TestEnvsection:any;
  TestAutosection:any;
  questArray:[];
  level1questions = []; 
  parameter1= [];
  question1=[];
  
  parameter:any;
  level:any;
  questions:any;
  response:any;


  // new:{ sections:{section:string;
  //      parameters:{parameter:string;
  //      level:{ questionLevel:number;
  //      questions:{ questionNo:number;
  //           questionDescription:string;
  //           response:{option:string;points:number}[],}[],}[],}[],}[],
  //          }[]= New;

  new:any[]=New;

  currentSection=0;
  currentParameter=0;
  currentLevel=0;
  currentNew=0;

  //conv:[];
  conv: {section:string,parameter:string,questionLevel:string,questionNo:string,questionDescription,response:{option:string,points:number}[],}[]= Conv;
  currentConv :any;
   

  
  
  currentQuestion =0;
  current=0;
  answerSelected = false;
  totalPoints :number;
  btnDisabled = true;
  fileHide =true;
  commentHide = true;
  options:string;
  points:any;
  

  


 

  constructor(private router: Router, private questionsService: QuestionsService) { }

  

  ngOnInit(): void {
    





     this.sections = this.new["sections"];
    
  this.TestEnvsection = this.new["sections"][0];
  this.TestAutosection = this.new["sections"][1];
  console.log(this.TestEnvsection);
       // console.log(this.sections)
  // console.log(this.TestEnvsection.parameters,"sdsa");

// First section starts here
  // this.TestEnvsection.parameters.forEach(sectionlevel => {
  //   sectionlevel.level.forEach(parameterlevel => {
  //     parameterlevel.questions.forEach(questionsl1 => {
  //       console.log(questionsl1,"questions");

  //       this.level1questions.push(questionsl1)
  //     });
  //   });
  // });

    this.TestEnvsection.parameters.forEach(parameterlevel => {
      this.parameter1.push(parameterlevel)
     // console.log(parameterlevel,"paralevel");
      parameterlevel.level.forEach(questionlevel => {
        this.question1.push(questionlevel)
       // console.log(questionlevel,"questionlevel");
        questionlevel.questions.forEach(questionsl1 => {
        //  console.log(questionsl1,"questions");
  
          this.level1questions.push(questionsl1)
        });
     });
    });


 // console.log(this.level1questions,"test");


  // active = this.TestEnvsection

  // if(localvariable){
  //     Active = this.TestEnvsection
  // }

  // Second section starts here
  // this.TestAutosection.parameters.forEach(sectionlevel => {
  //   console.log(sectionlevel,"section level")
  //   sectionlevel.level.forEach(parameterlevel => {
  //     console.log(parameterlevel,"parameter");
  //     parameterlevel.questions.forEach(questions => {
  //       console.log(questions,"questions");
  //     });
  //   });
  // });





    //  this.parameter=this.section.parameters;
    //  console.log(this.parameter, "ppppppp");
     
    //  this.level = this.parameter;
    //  this.level.forEach(element => {
    //    console.log(element,'level');
    //  });

    //  console.log(this.level, "lllll");

     
      

    //  this.questions = this.level[0].questions;
    // this.level.forEach(element => {
      // this.questArray = element.questionLevel;
      // this.questArray.push(element.questions)
      // console.log(element.questions[0],"elements")
      
    // });
    //  console.log(this.questArray, "qqqqq")

    //  this.response = this.questions[0].response;
    //  console.log(this.response, "rrrr");


    this.questionare = this.sections.map((sec)=>{
     // console.log(sec,"section")
      this.paraObject = sec.parameters.map((para)=>{
       // console.log(para, "parameter")
        this.levelObject = para.level.map((lev)=>{
        //  console.log(lev, "level")
          this.questionObject = lev.questions.map((que)=>{
         //   console.log(que, "question")
            this.responseObject = que.response.map((res)=>{
           //   console.log(res, "response")      
                return {option:res.option, points:res.points};     
            });
            // que.option = this.responseObject;
            return {questionNo: que.questionNo,questionDescription:que.questionDescription};
          });
         // lev.questionNo = this.questionObject;
          console.log(this.questionObject,"qo")
          
          return lev;
        });
       // para.questionLevel = this.levelObject;
        
        return para;
        //return this.parameter.find((para, index) => {return index === para});
    });
  //  sec.parameter = this.paraObject;
  
    return sec;    
    
  });
  

  

  
  console.log(this.questionare,"ss")
  console.log(this.paraObject,"pp");
  console.log(this.levelObject,"lll");
  console.log(this.questionObject,"qqqq");
  console.log(this.responseObject,"rr");
  this.totalLength = this.sections.length;
    console.log(this.totalLength,"hg"); 
  // this.totalLength = this.questionare.length;
  // console.log(this.totalLength,"hg")

  
    
    



  }




  onOptClick(points: number){
    if(points !== null){
    this.totalPoints= points;
    console.log(this.totalPoints)
    
    
    }
  }

  onClick(option:string,points:number,currentSection:number,currentQuestion:number,currentParameter:number,currentLevel:number){
    if(option=="yes"){
      this.totalPoints= points;
      console.log("first if")
        if( currentSection==0){
             if(currentParameter==0){
                if(currentLevel==0){this.currentSection = currentSection +1;}
                else if(currentLevel >= 1 && currentLevel <= 3){this.currentLevel++;console.log("yehi")}
                else if(currentLevel == 4){this.currentParameter++;}
             }
             else if(currentParameter==1){
              if(currentLevel < 2){this.currentParameter ++;}
              else if(currentLevel >= 2 && currentLevel <= 3){this.currentLevel++;console.log("ye")}
              else if(currentLevel == 4){this.currentParameter++;}

             }
          
        }else if(currentSection==1){
                if(currentParameter==0){
                  if(currentLevel <= 3){this.currentLevel++;}
                  else if(currentLevel == 4){this.currentParameter++;}
                }
        }
    }else{
      this.totalPoints= points;
      if( currentSection==0){
              if(currentParameter==0){
                if(currentLevel ==0 ){this.currentLevel++;}
                else if(currentLevel >= 1 && currentLevel<=4){this.currentParameter = currentParameter +1;}
                
              }
              else if(currentParameter==1){
              if(currentLevel < 2){this.currentLevel++;}
              else if(currentLevel >=2 && currentLevel <=4){this.currentParameter = currentParameter +1;}
              }
     
      }else if(currentSection==1){
           if(currentParameter==0){
             if(currentLevel <=4 ){this.currentParameter++;}
           }
   }
      
    }
  }
  
  onOpt(points: number){
    if(points == 1){
      console.log("if part")
     //console.log(this.totalPoints +=  points,"if points");
      this.totalPoints= points;
      this.btnDisabled = false;
      this.fileHide = false;
      this.commentHide= false;
      
    }else{
      console.log("else part")
    }
  }
 
  nextQuestionClick(){
    this.answerSelected = true; 
    
    setTimeout(()=>{
      if( this.currentSection!==null){
        this.currentSection++;
        this.currentParameter ++;
        this.currentLevel++;
        this.currentQuestion++
     
      }; 
     
      this.answerSelected = false; 
     
    },1000);
    this.btnDisabled = true;
      this.fileHide = true;
      this.commentHide= true;
  
  }

  
 showCurrentQuestion(){
  //if (this.questionObject){};
 
 }














// currentQ=0;
//   optn(points: number){
//     if(points!==null){
//       console.log(points)
//     }
//   }





 //   let totalQuestions:number, startQuestion: number, lastQuestion: number;
    //   if (totalQuestions <= 5) {
    //     startQuestion = 1;
    //     lastQuestion = totalQuestions;
    // } else {
    //     if (currentQuestion <= 3) {
    //         startQuestion = 1;
    //         lastQuestion = 5;
    //     } else if (currentQuestion + 1 >= totalQuestions) {
    //         startQuestion = totalQuestions - 4;
    //         lastQuestion = totalQuestions;
    //     } else {
    //         startQuestion = currentQuestion - 2;
    //         lastQuestion = this.currentQuestion+2;
    //     }
    // }











}
