import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'dept', component: DepartmentComponent },
  { path: '**', component: FilenotfoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
