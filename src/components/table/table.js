import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./table.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "royalblue",
    color: theme.palette.common.white,
    padding: "1%",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Category, Subscription, Type) {
  return { Category, Subscription, Type };
}

const rows = [
  createData("Member", "₹ 600", "Annually"),
  createData("Student Member", "₹ 300", "Annually"),
  createData("Life Member *below 60", "₹ 6000", "Lump Sum"),
  createData("Life Member *60 or above", "₹ 3000", "Lump Sum"),
  createData("Institutional Member", "₹ 6000", "Annually"),
  createData("Corporate Member", "₹ 60000", "Annually"),
  createData("Overseas Life Member", "USD 1000", "Lump Sum"),
  createData("Overseas Annual Member", "USD 100", "Annually"),
  createData("Overseas Institutional Member", "USD 1000", "Annually"),
];

export default function CustomizedTables() {
  return (
    <TableContainer className="table" component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right">Subscription</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.Category}</StyledTableCell>
              <StyledTableCell align="right">
                {row.Subscription}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
