const initState = {
  selectedBook: 0
};

export default function Reducer(state = initState, action: any) {
  switch (action.type) {
    case "selectedBook": return { ...state, selectedBook: action.selectedBook };
    default: return state;
  };
};
