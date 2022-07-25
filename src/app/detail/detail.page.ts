import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: string;
  todo!: { title: string; completed: boolean; };

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }


  async ngOnInit() {
    this.todo = await this.todosService.getTodoById(this.id);
  }
}
