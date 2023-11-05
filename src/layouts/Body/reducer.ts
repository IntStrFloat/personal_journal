export const INITIAL_FORM_STATE = {
  validate: {
    title: true,
    date: true,
    tag: true,
    text: true,
  },
  values: {
    title: '',
    date: '',
    tag: '',
    text: '',
    id: 1,
  },
  readyToSubmit: false,
};
export interface IState {
  validate: {
    title: boolean;
    date: boolean;
    tag: boolean;
    text: boolean;
  };
  values: {
    title: string;
    date: string;
    tag: string;
    text: string;
    id: number;
  };
  readyToSubmit: boolean;
}

type UpdatePayload = { title: string } | { date: string } | { tag: string } | { text: string };
type Action =
  | { type: 'CLEAR_VALIDATE' }
  | { type: 'SUBMIT' }
  | { type: 'CHANGE_VALUE'; payload: UpdatePayload }
  | { type: 'CLEAR' };

export function formRefucer(state: IState, action: Action) {
  switch (action.type) {
    case 'CLEAR_VALIDATE':
      return { ...state, validate: INITIAL_FORM_STATE.validate, readyToSubmit: false };
    case 'SUBMIT': {
      const titleValid = state.values.title?.trim().length != 0;
      const textValid = state.values.text?.trim().length != 0;
      const dateValid = state.values.date.length > 0;

      return {
        ...state,
        validate: {
          tag: true,
          text: textValid,
          title: titleValid,
          date: dateValid,
        },
        readyToSubmit: titleValid && textValid && dateValid,
      };
    }
    case 'CLEAR': {
      return { ...state, values: INITIAL_FORM_STATE.values, readyToSubmit: false };
    }
    case 'CHANGE_VALUE': {
      return { ...state, values: { ...state.values, ...action.payload } };
    }
  }
}
