import { createStore } from "redux";

import reducer, { initialState } from "./reducer";
import storage from "./storage";

const STORAGE_KEY = "everyday-stoic";

const configureStore = async () => {
  const storedStore = await storage.get(STORAGE_KEY);
  const deserialisedStore = storedStore
    ? JSON.parse(storedStore)
    : initialState;
  const store = createStore(reducer, deserialisedStore);

  const handleStoreChange = () => {
    const current = store.getState();
    const serialised = JSON.stringify(current);
    storage.save(STORAGE_KEY, serialised);
  };

  store.subscribe(handleStoreChange);
  return store;
};

export default configureStore;
