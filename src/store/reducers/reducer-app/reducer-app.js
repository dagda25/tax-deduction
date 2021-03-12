import {ActionType} from "../../action";
import {MAX_DEDUCTION, TAX} from "../../../utils/const";


const initialState = {
  isPopupOpened: false,
  taxDeduction: [],

};

const calculateTaxDeduction = (data) => {
  if (data < 10000) {
    return [];
  }
  const yearDeduction = +(data * 12 * TAX).toFixed(0);
  let totalDeduction = 0;
  const deductionByYear = [];

  while (totalDeduction < MAX_DEDUCTION) {

    totalDeduction += yearDeduction;
    if (totalDeduction > MAX_DEDUCTION) {
      deductionByYear.push(MAX_DEDUCTION - totalDeduction + yearDeduction);
    } else {
      deductionByYear.push(yearDeduction);
    }
  }

  return deductionByYear;
};


const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_POPUP:
      return Object.assign({}, state, {
        isPopupOpened: true,
      });
    case ActionType.CLOSE_POPUP:
      return Object.assign({}, state, {
        isPopupOpened: false,
        taxDeduction: [],
      });
    case ActionType.CALCULATE_TAX_DEDUCTION:
      return Object.assign({}, state, {
        taxDeduction: calculateTaxDeduction(action.payload),
      });
    default:
      return state;
  }
};

export {reducerApp};
