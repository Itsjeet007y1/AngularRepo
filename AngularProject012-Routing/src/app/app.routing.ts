import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

  // Below routing is only for one parent component
 // const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'emp', component: EmployeeComponent },
  // { path: 'emp/:empId', component: EmployeeComponent },
  // { path: 'dept', component: DepartmentComponent },
  // { path: '**', component: FilenotfoundComponent },
// ];

 // For Child routing
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:  [
      { path: 'emp', component: EmployeeComponent },
      { path: 'emp', component: EmployeeComponent },
      { path: 'emp/:empId', component: EmployeeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dept', component: DepartmentComponent }
    ]
  },
  { path: '**', component: FilenotfoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule( {
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
