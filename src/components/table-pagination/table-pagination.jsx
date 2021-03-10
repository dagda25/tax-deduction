import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {settings} from "../../utils/const";
import PropTypes from "prop-types";


const TablePagination = (props) => {

  const {data, currentPage, filteredData, changePage} = props;

  let pageCount;

  if (!filteredData) {
    pageCount = Math.ceil(data.length / settings.ITEMS_ON_PAGE);
  } else if (filteredData && !filteredData.length) {
    pageCount = 1;
  } else {
    pageCount = filteredData && filteredData.length ? Math.ceil(filteredData.length / settings.ITEMS_ON_PAGE) : Math.ceil(data.length / settings.ITEMS_ON_PAGE);
  }

  const handleClick = (evt) => {
    evt.preventDefault();
    if (evt.target.dataset.page !== currentPage) {
      changePage(+evt.target.dataset.page);
    }

  };


  return (
    <ul className="pagination">
      {[...Array(pageCount)].map((x, i) =>
        <li className={currentPage === i + 1 ? `active` : `waves-effect`} key={i}><a href={`page` + (i + 1)} onClick={handleClick} data-page={i + 1}>{i + 1}</a></li>
      )}
    </ul>
  );
};

TablePagination.propTypes = {
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  filteredData: PropTypes.array,
  changePage: PropTypes.func.isRequired,
};


const mapStateToProps = ({APP}) => ({
  data: APP.data,
  currentPage: APP.currentPage,
  filteredData: APP.filteredData,
});

const mapDispatchToProps = (dispatch) => ({
  changePage(page) {
    dispatch(ActionCreator.changePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
