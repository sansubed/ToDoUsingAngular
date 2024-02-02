export interface ITodoList{
    id :number;
    title: string;
    completed: boolean;

}


/* //   RouterModule.forRoot([
  //     {
  //       path:'home',
  //       component: HomeComponent
  //       //if the home component has the child then 
  //       //children:[{
  //         //{path:'homechild1', component:HomeChild1Component},
  //         //{path:'homechild2', component:HomeChild2Component}
  //       //}]
  //     },
  //     {
  //       path:'login/:id',
  //       component:LoginComponent
  //     },
  //     {
  //       path:'login',
  //       component:LoginComponent
  //     },
  //     {
  //       path:'', redirectTo:'home', pathMatch:'full'
  //     },
  //     {
  //       component :NoPageFoundComponent,
  //       path:"**" //wildcard
  //     },

  //   ]*/