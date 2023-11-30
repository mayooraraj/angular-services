import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  newTask = { title: '', description: '' };
  tasks: { title: string; description: string }[] = [];
  addedTask: { title: string; description: string } | null = null; //n

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask(this.newTask.title, this.newTask.description);
    this.newTask = { title: '', description: '' };
    this.tasks = this.taskService.getTasks(); 
  }

  
}
