import initialStore from "./store";

let reducer = (store = initialStore, action) => {
  let newStore = store;
  switch (action.type) {
    case "INCREMENT_NUMBER":
      newStore.count += action.payload;
      break;

    case "DECREMENT_NUMBER":
      newStore.count -= action.payload;
      break;
    case "CHECK_CHANGE":
      newStore.checked = !newStore.checked;
      break;

      case "SET_USERNAME":
        newStore.userName= action.payload;
        break;
  }
  return { ...newStore };
};
export default reducer;
