import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private url = "https://localhost:7118/api/Customers/";

  constructor( private http : HttpClient) { }

  getAll(){
    const path = `${this.url}getAll`
    return this.http.get<Customer[]>(path);
  }

  delete(id:string):Observable<Customer>{
    const path = `${this.url}delete?id=${id}`;
    return this.http.delete<Customer>(path)
  }
}
