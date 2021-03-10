import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const TableRow = (props) => {
  const {row} = props;

  let rowCode = [];
  for (let column in row) {
    if (row.hasOwnProperty(column)) {
      rowCode.push(row[column]);
    }
  }

  return (
    <tr>
      {
        rowCode.map((col, index) => {
          return <td key={index}>{col}</td>;
        })
      }
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
};


const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
