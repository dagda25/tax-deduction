import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";


const TaxDeductionButton = (props) => {
  const {openPopup} = props;
  return (
    <button className="button-popup" onClick={openPopup}>Налоговый вычет</button>
  );
};

TaxDeductionButton.propTypes = {
  openPopup: PropTypes.func
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openPopup() {
    dispatch(ActionCreator.openPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxDeductionButton);
