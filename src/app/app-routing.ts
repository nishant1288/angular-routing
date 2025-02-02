import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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
