import { Component, Input, OnInit,  Inject, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
//import paginate from 'jw-paginate';

import { QuestionsService } from "../questions.service";
import { CookieService } from 'ngx-cookie';
import { Questions } from '../questions';


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
  que:any[];

  errorMessage:string='';

  newAns : any;
  newAns1= [] ;
  questionare:any[];
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


  

  

  currentSection=0;
  currentParameter=0;
  currentLevel=0;
  currentQuestion =0;
  currentNew=0;

  
 
   

  
  
  
  current=0;
  answerSelected = false;
  totalPoints :number;
  btnDisabled = true;
  fileHide =true;
  commentHide = true;
  options:string;
  point:number;
  
  secObj:any;
  paraObj:any;
  levObj:any;
  queObj:any;
  


 

  constructor(private router: Router, private questionsService: QuestionsService, private cookieService:CookieService) { }

  

  ngOnInit(): void {
  //  console.log(this.questionsService.getQuestionare()["sections"],"from the questionsService")

  this.questionare = this.questionsService.getQuestionare()["sections"];
 this.getParams();

  //  this.questionsService.getQuestionare().subscribe({
  //    next: questionaires =>{ 
  //      this.questionare = questionaires['sections'];
  //      console.log(this.questionare);
  //     },
  //    error: err => this.errorMessage = err
  //  });

  }



@Input() getParams(){
  this.secObj = this.questionare[this.currentSection].section;
  this.paraObj = this.questionare[this.currentSection].parameters[this.currentParameter].parameter;
  this.levObj = this.questionare[this.currentSection].parameters[this.currentParameter].level[this.currentLevel].questionLevel;
  this.queObj = this.questionare[this.currentSection].parameters[this.currentParameter].level[this.currentLevel].questions[this.currentQuestion].questionNo;
  console.log('section:', this.secObj)
  console.log('para:', this.paraObj)
  console.log('level:', this.levObj)
  console.log('question', this.queObj)
  this.router.navigate(['/questions','section',this.secObj,'parameter',this.paraObj,'level',this.levObj,'question',this.queObj])
    
}
  

  onClick(option:string,points:number){
    this.btnDisabled = false;
    this.fileHide = false;
    this.commentHide= false;
    this.options=option;
    this.point=points;
    
  }



  nextClick(questionareObj:any, option:string,points:number,currentSection:number,currentQuestion:number,currentParameter:number,currentLevel:number){
  setTimeout(() => {
    if(option=="yes"){
       console.log(this.currentQuestion, "qq");
       console.log(this.currentLevel, "l");
      this.totalPoints = points;
      console.log("first if")
        if( currentSection==0){
             if(currentParameter==0){
                if(currentLevel==0){ 
                  this.currentParameter++;
                }else if(currentLevel >= 1 && currentLevel <= 3){
                    if(1===1){
                      console.log('full object',questionareObj,"Curent level",currentLevel);
                    }
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentLevel++;
                      this.currentQuestion = 0;
                      console.log("cl");
                    }
                    // console.log("current level", currentLevel)
                }else if(currentLevel == 4){
                    this.currentParameter++;
                    this.currentLevel=0;
                    this.currentQuestion=0;
                    console.log("pppp")
                }
             }
             else if(currentParameter==1){
                if(currentLevel < 2){ 
                   this.currentSection++;
                   this.currentParameter=0;
                   this.currentLevel=0;
                }else if(currentLevel >= 2 && currentLevel <= 3){
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentLevel++;
                      this.currentQuestion = 0;
                      console.log("cl");
                    }
                }else if(currentLevel == 4){
                  this.currentSection++;
                  this.currentParameter=0;
                  this.currentLevel=0;
                }

             }
          
        }else if(currentSection==1){
            if(currentParameter==0){
                if(currentLevel <= 3){
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentLevel++;
                      this.currentQuestion = 0;
                      console.log("cl");
                    }
                }else if(currentLevel == 4){
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentParameter++;
                      this.currentQuestion = 0;
                      console.log("cl");
                      this.router.navigate(['thankyou']);
                    }
                }
            }
        }
    }else if(option=="no"){
      console.log(this.currentQuestion, "qq else");
      console.log(this.currentLevel, "l else");
      this.totalPoints= points;
      if( currentSection==0){
          if(currentParameter==0){
              if(currentLevel ==0 ){
                this.currentLevel++;
              }else if(currentLevel >= 1 && currentLevel<=4){
                this.currentParameter++;
                this.currentLevel=0;
                this.currentQuestion=0;
              }
                
          }else if(currentParameter==1){
              if(currentLevel < 2){
                this.currentLevel++;
              }else if(currentLevel >=2 && currentLevel <=4){
                this.currentSection++;
                this.currentParameter=0;
                this.currentLevel=0;
                this.currentQuestion=0;
              }
          }
     
      }else if(currentSection==1){
          if(currentParameter==0){
              if(currentLevel <=4 ){
                this.currentParameter++;
                this.router.navigate(['thankyou']);
              }
          }
      }
      
    }else{
      this.currentQuestion++;
      console.log("na")
    }
    this.getParams();
   // this.router.navigate(['/questions','section',this.currentSection,'parameter',this.currentParameter,'level',this.currentLevel,'question',this.currentQuestion]);
    this.answerSelected = false; 
    },1000);
    

    this.btnDisabled = true;
    this.fileHide = true;
    this.commentHide= true;

  }



  
 
  


 
//for uploading  files
@ViewChild('attachments') attachment: any;
fileList: File[] = [];
listOfFiles: any[] = [];

onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile.name)
  }

  this.attachment.nativeElement.value = '';
}
//removing files
removeSelectedFile(index) {
 // Delete the item from fileNames list
 this.listOfFiles.splice(index, 1);
 // delete file from FileList
 this.fileList.splice(index, 1);
}


 
 
  
 








}
