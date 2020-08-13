import { Employee } from "../models/employee.model";


export class ResolveEmployeeList{
      constructor(public employeeList:Employee[],public error:any = null){

      }
}