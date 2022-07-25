import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  public async getAll() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = response.json();
    return data;
  }

  public async getTodoById(_id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${_id}`);
    const data = response.json();
    return data;
  }
}
