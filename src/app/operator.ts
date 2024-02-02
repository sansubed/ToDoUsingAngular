import { Observable, from, map } from "rxjs";

const numberArr = [1,2,3,4,5];

const observable$ = from(numberArr).pipe((map((value)=>value*2)));

const result = observable$.subscribe((x)=> {console.log(x)});