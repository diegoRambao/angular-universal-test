import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public todos: { title: string, completed: boolean, id: number }[] = [];

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  public async getTodos() {
    this.todos = await this.todosService.getAll();
  }
}
