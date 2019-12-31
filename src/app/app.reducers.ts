import { FiltrosValidos } from './filter/filter.actions';
import { Todo } from './todo/Models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface AppState {
  todos: Todo[],
  filtro: FiltrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilter.filtroReducer
}