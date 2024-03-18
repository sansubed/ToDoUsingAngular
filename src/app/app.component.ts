import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TodosDataService } from './services/todos-data.service';
import { ITodoList } from './todo';
import { Subscription } from 'rxjs';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications';
import { MatDialog } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
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
  constructor(private toDoData: TodosDataService, private service :NotificationsService, public dialog: MatDialog ) {
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

  getTasksFromForm(data: ITodoList){
   data.id = Number(data.id);
    this.toDoData.saveToDos({id: data.id,title:data.title, completed: false}).subscribe((res)=>{
      console.warn(res)
    })

  }

  //pass data from this comp to child comp
  digit:number=1;
  incrementNumber():number
  {
    return this.digit ++;
  }
  decrementNumber(): number
  {
    return this.digit --;
  }

  //pass data from child to the parnet
  updateData(item:string)
  {
    console.warn(item);
  }


  //prevents potential memory leaks
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  selectedOption:any;
  changeServiceOptions:string[]=['This meter needs to be switched to a new service','This service is not supposed to be on this account - Set inactive and do not bill'];
  

  onInfo(message: string): void {
    this.service.info('Info', 'This is a SO order', { //if you want to show the message from the html side just type messge here with no '' in place of the 'This is a SO order' 
      //Reference:info(title?: any, content?: any, override?: any): Notification;
      position: ['bottom', 'right'],
      timeOut: 2000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  onInfoAlternative():void
  {
    this.dialog.open(this.dialogTemplate,{ //open(componentOrTemplate: any, config?: MatDialogConfig): MatDialogRef<any>
      width: '250px',
    });
  }


}


