import { createStore, createHook, defaults } from "react-sweet-state";
import initialState, { State } from "./initialState";
import actions, { Actions } from "./actions";

defaults.devtools = true;

const Store = createStore<State, Actions>({
  name: `Crossfund`,
  initialState,
  actions,
});

export const useRootData = createHook(Store, {
  selector: (state) => state,
});
