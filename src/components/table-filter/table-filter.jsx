import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

const TableFilter = (props) => {

  const {changeFilter} = props;

  const handleChange = (evt) => {
    changeFilter(evt.target.value);
  };

  return (
    <div className="table-filter">
      <div className="input-field col s6">
        <input placeholder="Введите значение" id="first_name" type="text" className="validate" onChange={handleChange}/>
        <label htmlFor="first_name">Поиск по таблице</label>
      </div>
    </div>
  );
};

TableFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  changeFilter(string) {
    dispatch(ActionCreator.changeFilter(string));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableFilter);
