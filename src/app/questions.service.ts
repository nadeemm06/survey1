import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ques } from "./question";
import { Questionaire } from "./questionaire";
import  Questionaires  from "./questionaires.json";
import Conv from "./conv.json"
import Q from "./q.json"


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  conv: {section:string,parameter:string,questionLevel:string,questionNo:string,questionDescription,response:{option:string,points:number}[],}[]= Conv;

  getConv(){
    return this.conv
  }
  questionaires :{Section:string,Parameter:string,
                   QL1 : {
                          QNo: number,
                          QDesc:string,
                          Response:string,
                          points:number}[],}[]=Questionaires;

 // q: Questionaire[]= [];
    q: []= Q;
  getq(){
    return this.q;
  }

  questions: Ques[] = [
    {
      question: "What's your name",
      answer: [
        { option: "Nairobi", correct: false},
        { option: "Tokyo", correct: true},
      ]
    },
    {
      question: "What's your age",
      answer: [
        { option: "10", correct: true},
        { option: "20", correct: false},
      ]
    },
    {
      question: "What's your occupation",
      answer: [
        { option: "Doctor", correct: false},
        { option: "Engineer", correct: true},
      ]
    },
    {
      question: "What's your creds",
      answer: [
        { option: "20", correct: true},
        { option: "30", correct: false},
      ]
    },
    {
      question: "What's your play",
      answer: [
        { option: "football", correct: false},
        { option: "cricket", correct: true},
      ]
    },

  ]


  getQues(){
    return this.questions;
  }











 //----------------Properties------------------
  readonly rootUrl = 'http://localhost:8088';
  qns: any[];
  qnProgress: number;
  correctAnswerCount: number = 0;

  constructor(private http: HttpClient) { }

  //--------------Http Methods-----------------
  getQuestions(){
    return this.http.get(this.rootUrl + '/questions');
  }

  getAnswers(){
    var body = this.qns.map(x => x.QnID);
    return this.http.post(this.rootUrl + '/answers', body);
  }

  upload(formdata:FormData){
    let url = 'http://localhost:8585/pic-upload';
    return this.http.post(url, formdata);
  }

 }
