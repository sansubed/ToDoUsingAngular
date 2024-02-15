import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {

  constructor(){}

  ngOnInit(): void {
  
    
  }

  DateSelected: any;

  fetchDateSelected(){
    console.log("Date is:",this.DateSelected)
  }


  
}
