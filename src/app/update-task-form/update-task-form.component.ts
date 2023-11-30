import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.scss']
})
export class UpdateTaskFormComponent {
  @Input() index!: number;
  @Input() currentTask!: { title: string, description: string };
  updatedTask = { title: '', description: '' };

  constructor(private taskService: TaskService) {}

  ngOnChanges(): void {
    this.updatedTask = { ...this.currentTask };
  }

  updateTask(): void {
    this.taskService.updateTask(this.index, this.updatedTask.title, this.updatedTask.description);
    // Additional logic, e.g., hide the form
  }

  
}
