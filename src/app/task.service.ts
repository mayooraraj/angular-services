import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: { title: string, description: string }[] = [];
  

  getTasks(): { title: string, description: string }[] {
    return this.tasks;
  }

  addTask(title: string, description: string): void {
    this.tasks.push({ title, description });
  }
  

  updateTask(index: number, title: string, description: string): void {
    this.tasks[index] = { title, description };
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
