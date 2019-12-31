import { BorrarAllTodoAction } from './../todo.actions';
import { FiltrosValidos, SetFiltroAction } from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../Models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: FiltrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: FiltrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(filtro: FiltrosValidos) {
    const accion = new SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletadas() {
    const accion = new BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
