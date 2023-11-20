import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatIconModule, MatCheckboxModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  newTaskTitle = '';
  content = 'This is a snackbar';
  checkboxValue: boolean = false;

  constructor(private taskService: TaskService,private snackBar: MatSnackBar) {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {

  }

  showSnackbar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      panelClass: [panelClass]
    });
  }

  onCheckbox(event: any) {
    if (event.checked) {
      this.showSnackbar('Task Completed.', 'custom-panel-class');
    }
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
