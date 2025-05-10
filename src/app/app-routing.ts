import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'employees',
    component: EmployeesComponent
  },
  {
    path : 'employees/:name/:id',
    component: EmployeesComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {path: 'child1', component: Child1Component},
      {path : 'child2', component: Child2Component}
    ]
  },
  {
    path : '**',
    component: PagenotfoundComponent
    // component : HomeComponent // can use either one of them
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
