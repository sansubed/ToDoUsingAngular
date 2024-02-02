import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  Userid:any;
  constructor (private route: ActivatedRoute){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class
    console.warn("The ID is",this.route.snapshot.paramMap.get('id'));
    //Snapshot: Read the parameter one time, when the route does not change when displaying the component
    this.Userid = this.route.snapshot.paramMap.get('id'); //this id must match from the path


    //when the component needs to redraw parameters as they change,
    //Observable:Read emitted parameters as they change
    // this.route.paramMap.subscribe(
    //   params => console.log(params.get('id'))
    //   );
    
  }

}
