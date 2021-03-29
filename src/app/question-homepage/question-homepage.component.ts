import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from "../questions.service";
import Conv from "../conv.json"
import New from './new.json';

@Component({
  selector: 'app-question-homepage',
  templateUrl: './question-homepage.component.html',
  styleUrls: ['./question-homepage.component.css']
})
export class QuestionHomepageComponent implements OnInit {
  @Input() questionIndex: number;

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
      let paraObject = sec.parameters.map((para)=>{
        
       
       // console.log(para, "parameter")
        let levelObject = para.level.map((lev)=>{
        //  console.log(lev, "level")
          let questionObject = lev.questions.map((que)=>{
         //   console.log(que, "question")
            let responseObject = que.response.map((res)=>{
           //   console.log(res, "response")
              
            });
            que.option = responseObject;
            return que;
          });
          lev.questionNo = questionObject;
          return lev;
        });
        para.questionLevel = levelObject;
        return para;
       // return this.parameter.find((para, index) => {return index === para});
    });
    sec.parameter = paraObject;
    return sec;    
  });




    




  }

 














  onOptClick(points: number){
    if(points !== null){
    this.totalPoints= points;
    console.log(this.totalPoints)
    
    
    }
  }
  
  onOpt(points: number){
    if(points !== null){
     //console.log(this.totalPoints +=  points,"if points");
      this.totalPoints= points;
      this.btnDisabled = false;
      this.fileHide = false;
      this.commentHide= false;
      
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
  console.log(this.questions,"tyrfyguyuh");
   
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
