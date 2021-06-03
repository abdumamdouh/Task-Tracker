import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    // we want to catch this change using Subsciption
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }
}
