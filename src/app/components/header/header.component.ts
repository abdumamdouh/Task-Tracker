import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'task-tracker';

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask(): void {
    console.log('zepy');
  }
}
