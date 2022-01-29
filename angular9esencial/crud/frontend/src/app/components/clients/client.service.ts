import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//essa classe pode ser injetada em outros modulos
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Client } from './client.model'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3001/client"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
      
    });
  }
  


  //metodo que via fazer a submissao para o backend criando 
  //um novo produto ("para entender melhor va em assets e procure  por info.txt observable")
  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`;
    return this.http.put<Client>(url, client).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Client>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}

