import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    // we will watch this change in the subject in the Ui Service and depending on it we will change the value of showAddTask property
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Please Add a Task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit the object

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
