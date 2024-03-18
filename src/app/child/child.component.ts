import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  title:string="Calculator from Child"
  // @Input() set data(value:number)
  // {
  //   value+1;
  //   console.log(value+1)

  // }

  @Input() data: any; // here data is coming from app so doe snot make sense to initialize it
  constructor(){}
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
