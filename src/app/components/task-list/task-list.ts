
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task';
import { DueDatePipe } from '../../pipes/due-date-pipe';
import { TaskHighlight } from '../../directives/task-highlight';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DueDatePipe,
    TaskHighlight
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  private taskService = inject(TaskService);

  // Subscribe to task updates using the async pipe in HTML
  tasks$: Observable<Task[]> = this.taskService.getTasks();

  title = '';
  dueDate = '';
  priority: Task['priority'] = 'Medium';

  addTask(): void {
    if (this.title.trim() && this.dueDate) {
      this.taskService.addTask(
        this.title.trim(),
        this.dueDate,
        this.priority
      );

      // Reset the form
      this.title = '';
      this.dueDate = '';
      this.priority = 'Medium';
    }
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }
}
