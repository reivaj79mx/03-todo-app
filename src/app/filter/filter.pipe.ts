import { Todo } from './../todo/Models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import { FiltrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: FiltrosValidos): any {
    switch (filtro) {
      case 'completados':
        return todos.filter(t => t.completado);
      case 'pendientes':
        return todos.filter(t => !t.completado);
      default:
        return todos;
    }
  }

}
