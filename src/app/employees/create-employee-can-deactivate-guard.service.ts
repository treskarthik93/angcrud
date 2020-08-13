import { CanDeactivate } from "@angular/router";
import {CreateEmployeeComponent} from '../employees/create-employee.component';
import { Injectable } from "@angular/core";



@Injectable()
export class CreateEmployeeCanDeactivateGuardService 
implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{
        if(component.createEmployeeForm.dirty){
            return confirm('are you sure you want to leave this page');

        }

        else {

            return true;
        }

    }


}