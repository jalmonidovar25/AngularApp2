
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Store tasks in memory
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Assignment 2',
      dueDate: '2026-11-15',
      priority: 'High',
      completed: false
    },
    {
      id: 2,
      title: 'Review Angular lessons',
      dueDate: '2026-11-16',
      priority: 'Medium',
      completed: false
    }
  ];

  // Notify components when tasks change
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  // Add a new task
  addTask(title: string, dueDate: string, priority: Task['priority']): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      dueDate,
      priority,
      completed: false
    };

    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }

  // Mark a task as completed or incomplete
  toggleTask(id: number): void {
    this.tasks = this.tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    this.tasksSubject.next(this.tasks);
  }
}
