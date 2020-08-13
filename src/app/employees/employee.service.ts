import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';
import { Observable, throwError } from "rxjs";
import 'rxjs/add/observable/of'
import { delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient) { }
  

    baseUrl = 'http://localhost:3000/employees';

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }


    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.log('client side error:', errorResponse.error.message)
        }

        else {
            console.log('Server side error:', errorResponse)
        }

        return throwError('There is a problem with the service.We are notified & working on it .Please try again later')

    }

    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })

        })
            .pipe(catchError(this.handleError));


    }


    updateEmployee(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })

        })
            .pipe(catchError(this.handleError));

    }



    deleteEmployee(id: number):Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }
}