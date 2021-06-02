import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    text: 'alo',
    day: 'May 6th at 1:30pm',
    reminder: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
