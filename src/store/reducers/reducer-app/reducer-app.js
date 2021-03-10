import {ActionType} from "../../action";


const initialState = {
  data: [],
  currentPage: 1,
  sortColumn: null,
  sortOrder: `DESC`,
  filterString: null,
  filteredData: null,
  numberColumns: [`userId`, `id`]

};

const sortData = (state, data, column) => {
  let newState = JSON.parse(JSON.stringify(data));
  if (!newState) {
    newState = [];
  }
  if (state.numberColumns.includes(column)) {
    newState.sort((a, b) => {
      return state.sortOrder === `ASC` ? a[column] - b[column] : b[column] - a[column];
    });
  } else {
    newState.sort((a, b) => {
      if (state.sortOrder === `ASC`) {
        return a[column].localeCompare(b[column], `default`, {caseFirst: `upper`});
      } else {
        return -(a[column].localeCompare(b[column], `default`, {caseFirst: `upper`}));
      }
    });
  }
  return newState;
};

const filterData = (state, string) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.filteredData = newState.data.filter((el) => {
    for (let col in el) {
      if (el.hasOwnProperty(col)) {
        if (el[col].toString().includes(string)) {
          return true;
        }
      }

    }
    return false;
  });
  return newState.filteredData;
};


const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        filterString: action.payload,
        filteredData: filterData(state, action.payload),
        currentPage: 1,
      });
    case ActionType.CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPage: action.payload,
      });
    case ActionType.CHANGE_SORTING:
      return Object.assign({}, state, {
        sortColumn: action.payload,
        sortOrder: state.sortOrder === `DESC` ? `ASC` : `DESC`,
        currentPage: 1,
        data: sortData(state, state.data, action.payload),
        filteredData: sortData(state, state.filteredData, action.payload),
      });
    default:
      return state;
  }
};

export {reducerApp};
