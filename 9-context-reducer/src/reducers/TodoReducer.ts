import { Todo } from "../models/Todo";

// Beskriver en förändring av vårt state (todos)
export interface IAction {
  type: ActionType;
  payload: string;
}

// enum som beskriver vilka förändringar vi kan
// genomföra på vårt state (todos)
export enum ActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

// Reducerfunktion. Alltid två parametrar (state + förändring)
// Skall alltid skicka tillbaka ett nytt state (Todo[])
export const TodoReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...todos, new Todo(action.payload)];

    case ActionType.REMOVED:
      return todos.filter((t) => t.id !== +action.payload);

    case ActionType.TOGGLED:
      return todos.map((t) => {
        if (t.id === +action.payload) return { ...t, done: !t.done };
        return t;
      });

    default:
      return todos;
  }
};
