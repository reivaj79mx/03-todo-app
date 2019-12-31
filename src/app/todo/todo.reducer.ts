import * as fromTodo from './todo.actions';
import { Todo } from './Models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar al mundo');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:

      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:

      return state.map(edit => {
        if (edit.id === action.id) {
          return {
            ...edit,
            completado: !edit.completado
          }
        } else {
          return edit;
        }
      })

    case fromTodo.EDITAR_TODO:

      return state.map(edit => {
        if (edit.id === action.id) {
          return {
            ...edit,
            texto: action.texto
          }
        } else {
          return edit;
        }
      })

    case fromTodo.BORRAR_TODO:

      return state.filter(edit => edit.id !== action.id);

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(edit => {
        return {
          ...edit,
          completado: action.completado
        }
      })

    case fromTodo.BORRAR_ALL_TODO:

      return state.filter(edit => !edit.completado);

    default:
      return state;
  }
}