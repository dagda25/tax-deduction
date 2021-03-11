export const ActionType = {
  OPEN_POPUP: `OPEN_POPUP`,
  CLOSE_POPUP: `CLOSE_POPUP`,
  CALCULATE_TAX_DEDUCTION: `CALCULATE_TAX_DEDUCTION`,
};

export const ActionCreator = {
  openPopup: (data) => ({
    type: ActionType.OPEN_POPUP,
    payload: data
  }),
  closePopup: (data) => ({
    type: ActionType.CLOSE_POPUP,
    payload: data
  }),
  calculateTaxDeduction: (data) => ({
    type: ActionType.CALCULATE_TAX_DEDUCTION,
    payload: data
  }),
};
