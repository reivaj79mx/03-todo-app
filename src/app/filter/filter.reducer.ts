import { Acciones } from './../filter/filter.actions';
import * as fromFilter from './filter.actions';

const estadoInicial: fromFilter.FiltrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: Acciones): fromFilter.FiltrosValidos {
  switch (action.type) {
    case fromFilter.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  } 
}