import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  httpGetUserByCpf(cpf: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.api_url}/users?cpf=${cpf}`);
  }
}
