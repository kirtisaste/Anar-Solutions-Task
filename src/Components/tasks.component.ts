import { Component } from '@angular/core';
import { TasksService } from '../Services/task.service';
import { Task } from '../Models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']

})
export class TasksComponent {
  tasks: any = [];
 taskcompleted :true
  constructor(private taskService: TasksService) {
    this.taskService.getTasks().subscribe((res) => {
      for (let taskData in res) {
        this.tasks.push({
          id: res[taskData].id,
          userId: res[taskData].userId,
          title: res[taskData].title,
          completed: res[taskData].completed,
        });
      }
      console.log(this.tasks);
    });
  }

  ngOnInit() {
    //this.tasks.push({ id: 1, userId: 2, title: 'ABC', completed: true });
  }
}
