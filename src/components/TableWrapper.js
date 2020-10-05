import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import {
  //   AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  // Remove,
  // SaveAlt,
  Search,
  // ViewColumn,
} from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import dynamic from "next/dynamic";

const tableIcons = {
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => (
  //   <ChevronRight {...props} ref={ref} />
  // )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

// tableIcons.Add.displayName = "Add";
tableIcons.Check.displayName = "Check";
tableIcons.Clear.displayName = "Clear";
tableIcons.Delete.displayName = "Delete";
tableIcons.Edit.displayName = "Edit";
tableIcons.Filter.displayName = "Filter";
tableIcons.FirstPage.displayName = "FirstPage";
tableIcons.LastPage.displayName = "LastPage";
tableIcons.NextPage.displayName = "NextPage";
tableIcons.PreviousPage.displayName = "PreviousPage";
tableIcons.ResetSearch.displayName = "ResetSearch";
tableIcons.Search.displayName = "Search";
tableIcons.SortArrow.displayName = "SortArrow";

const DynamicMaterialTableWithNoSSR = dynamic(() => import("material-table"), {
  // eslint-disable-next-line react/display-name
  loading: () => <Skeleton height={700} style={{ marginTop: "-180px" }} />,
  ssr: false,
});

const TableWrapper = ({ options, icon, ...rest }) => {
  return (
    <DynamicMaterialTableWithNoSSR
      style={{ backgroundColor: "#fff" }}
      icons={{ Add: icon, ...tableIcons }}
      {...rest}
      options={{
        // paging: false,
        headerStyle: {
          backgroundColor: "#fcfcfc",
          fontSize: 14,
          letterSpacing: 0.34,
        },
        rowStyle: {
          backgroundColor: "#fff",
        },
        ...options,
      }}
    />
  );
};

TableWrapper.propTypes = {
  options: PropTypes.shape({}),
};

TableWrapper.defaultProps = {
  options: {},
};

export default TableWrapper;
