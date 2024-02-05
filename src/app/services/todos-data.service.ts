import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //to make http request
import { ITodoList } from '../todo';
import { Observable } from 'rxjs';

//This is Angular Service 
@Injectable({
  providedIn: 'root'
})
export class TodosDataService {
  //api holds the endpoint url for feyching the data
  apiUrl:string = "http://localhost:3000/users";
 //pass to the constructor so it goes to super constructor
 //take an instance of class HttpClient
  constructor(private http:HttpClient){

  }
   
  //this method sends HTTP get request to the url
  //and returns an observale that emits an array of objects (ITodoList[])
  //this will return the observable
    getToDos():Observable<ITodoList[]>
    {
      //get is the method inside the HttpClient class
      return this.http.get<ITodoList[]>(this.apiUrl);
      //signifies the type of response
    }

   //Observable: handles async ops, data may not be available immediately
   //components that subscribe to the observable can react to changes when data is received/error occurs
 saveToDos(data: ITodoList)
 {
  return this.http.post(this.apiUrl,data);
 }

}
