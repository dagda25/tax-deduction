import React from "react";
import {connect} from "react-redux";
import TableFilter from "../table-filter/table-filter";
import TablePagination from "../table-pagination/table-pagination";
import TableHeader from "../table-header/table-header";
import TableBody from "../table-body/table-body";


const Table = () => {

  return (
    <div className="table">
      <TableFilter />
      <table className="striped responsive-table">
        <TableHeader />
        <TableBody />
      </table>
      <TablePagination />
    </div>
  );
};


const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
