import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosDataService } from './services/todos-data.service';
import { ITodoList } from './todo';
import { Subscription } from 'rxjs';
//Get the data from the database -> it is done through API.
//Component
//Service -> Call API here and service has HTTP module inbuilt and is called from server
//Component -> Service ->HTTPModule ->Server
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ToDo List';
  //an array of ITodoList fetched from the API
  todos: ITodoList[] =[];

  //type Subscription, variable to hold subscription to the observable returned from service
  subscription!: Subscription;

  //holds error which might occur during http get request
  errorMessage: any;
  //subscribe -> api call data to be used in this component, wont be gone to any unnecessary component
  //subscribe -> call back function

  //the constructor injects an instance of service into components
  //this is dependency injection
  constructor(private toDoData: TodosDataService) {
    // toDoData.getToDos().subscribe((data) => {
    //   console.warn("data", data);
    //   this.todos = data;
    // });
  }

  //called after Angular has initialized the comp
  ngOnInit(): void {
    //subscribes to getToDos method 
    //subscription has 2 call backs
    //next : when data is emitted (success)
    this.subscription = this.toDoData.getToDos().subscribe({
      next: (data) => {
        this.todos = data;
      console.log("Data from API",data)},
      error:(err) =>this.errorMessage = err,
    })
  }

  //prevents potential memory leaks
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  

}


