import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    //feteching data from our local server running at port 5000
    return this.http.get<Task[]>(this.apiURL);
  }
}
