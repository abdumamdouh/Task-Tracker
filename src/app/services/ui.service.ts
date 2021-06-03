import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  private showAddTask: boolean = false;
  // subject to pass the value to different components and must be returned as Observable
  private subject = new Subject<any>();

  // method to toggle the showAddTask Proberty
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    // the subject that we will watch its change in different components depending if it has changed or not
    // it will return the boolean value of showAddTask
    this.subject.next(this.showAddTask);
  }

  //method to return the subject value of showAddTask as an Observable
  onToggle(): Observable<any> {
    // return the subject as Observable
    return this.subject.asObservable();
  }
}
