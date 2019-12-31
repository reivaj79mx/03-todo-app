import { Action } from '@ngrx/store';

export const SET_FILTRO = '[FILTER] Set filtro';

export type FiltrosValidos = 'todos' | 'pendientes' | 'completados';

export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filtro: FiltrosValidos) {}
}

export type Acciones = SetFiltroAction;