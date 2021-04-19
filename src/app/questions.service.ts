import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from "rxjs/operators";
import { Ques } from "./question";
import  Questionaires  from "./questionaires.json";
import New from './question-homepage/new.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionareUrl = 'assets/data/new.json';

  constructor(private http: HttpClient) { }
  

  // getQuestionare(){
  //   return this.http.get(this.questionareUrl);
  // }

  // private handleError(err: HttpErrorResponse){
  //   console.log(err)
  // }

  newQuestionare:[] = New;
  getQuestionare(){
    return this.newQuestionare
  }


 




/*

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

  */

 }
function tap(arg0: (data: any) => void): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

