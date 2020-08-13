import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {RouterModule ,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive'
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive'
import {EmployeeService} from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion.component';
import {HttpClientModule} from '@angular/common/http';
const appRoutes : Routes = [{
  path:'list',component:ListEmployeesComponent,
resolve:{employeeList:EmployeeListResolverService}} ,
  {path: 'edit/:id' ,
  component:CreateEmployeeComponent,
  canDeactivate:[CreateEmployeeCanDeactivateGuardService]
},
{path:'employees/:id',component:EmployeeDetailsComponent,
canActivate:[EmployeeDetailsGuardService]},
 {path:'',redirectTo:'/list',pathMatch:'full'},
 {path:'notfound',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,
    EmployeeDetailsGuardService,
    EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
