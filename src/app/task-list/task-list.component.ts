import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {

  }

  addTask() {
    console.log("ezgi");
    if (this.newTaskTitle.trim() !== '') {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle
      };
      this.taskService.addTask(newTask);
      this.newTaskTitle = '';
    }
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

}
