import { Component,OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: { title: string, description: string }[] = [];
  showUpdateForm = false;
  currentIndex!: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggleUpdateForm(index: number): void {
    this.showUpdateForm = !this.showUpdateForm;
    this.currentIndex = index;
  }

  updateTask(index: number, updatedTask: { title: string, description: string }): void {
    this.taskService.updateTask(index, updatedTask.title, updatedTask.description);
    this.tasks = this.taskService.getTasks();
    this.showUpdateForm = false; 
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks();
  }
}
